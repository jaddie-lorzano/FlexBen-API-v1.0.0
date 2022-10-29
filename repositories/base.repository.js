
import { DB_TABLE } from '../constants/index.js';
export default class BaseRepository {
    constructor({
        db,
        dbName,
        table,
        tablePrimaryKeyColumn
    }) {
        this._db = db;
        this._dbName = dbName
        this.dbTable = table;
        this.tablePrimaryKeyColumn = tablePrimaryKeyColumn;
        this.columnList = [];
        this.valuesList = [];
        this.entities = [];
    }
    async getAll () {
        let sql = ` SELECT * 
                    FROM ${this._dbName}.${this.dbTable}`
        this.entities = await this._db.execute(sql)
            .then(data => {
                let [result, _] = data;
                return result
            })
            .catch(err => { 
                return err 
            })
        return this.entities;
    }
    async getById (id) {
        let sql = ` SELECT * 
                    FROM ${this._dbName}.${this.dbTable} 
                    WHERE ${this.tablePrimaryKeyColumn} = ?`
        this.entity = await this._db.execute(sql, [id])
            .then(data => {
                let [result, _] = data
                return result
            })
            .catch(err => {
                return err
            })
        return this.entity;
    }
    async insert (entity) {
        let placeholders = [];
        let valuesList = [];
        let columnList = [];
        Object.values(entity)
            .forEach(value => {
                if (value === undefined) { value = null }
                valuesList.push(value);
                placeholders.push('?')
            })
        Object.keys(entity)
            .forEach(key => {
                columnList.push(key);
            })
        let placeholdersString = placeholders.join(',')
        valuesList

        let sql = ` INSERT INTO ${this._dbName}.${this.dbTable} 
                    (${columnList}) 
                    VALUES (${placeholdersString})`;

        let newEntityId = await this._db.execute(sql, valuesList)
            .then(data => { 
                let [result, _] = data; return result.insertId
            })
            .catch(err => {
                throw err;
            });
        return newEntityId;
    }

    async deleteById(id) {
        let sql = ` DELETE FROM ${this._dbName}.${this.dbTable} 
                    WHERE ${this.tablePrimaryKeyColumn} = ?`
        this.entity = await this._db.execute(sql, [id])
            .then(data => {
                let [result, _] = data
                return result
            })
            .catch(err => {
                return err
            })
        return this.entity;
    }
    async softDeleteById(id) {
        let sql = ` UPDATE ${this._dbName}.${this.dbTable}
                    SET ${DB_TABLE.SOFT_DELETE_COLUMN} = 0
                    WHERE ${this.tablePrimaryKeyColumn} = ?`
        this.entity = await this._db.execute(sql, [id])
            .then(data => {
                let [result, _] = data
                return result
            })
            .catch(err => {
                return err
            })
        return this.entity;
    }

    async updateById(id, {columns = [], values = []}) {
        let updates = [];
        let placeholders = [];
        columns.forEach(column => {
            updates.push(`${column} = ?`);
            placeholders.push('?');
        })
        let updateColumnString = updates.join(', ');
        let sql = ` UPDATE ${this._dbName}.${this.dbTable}
                    SET ${updateColumnString}
                    WHERE ${this.tablePrimaryKeyColumn} = ?`
        this.entity = await this._db.execute(sql, [...values, id])
            .then(data => {
                let [result, _] = data
                return result
            })
            .catch(err => {
                return err
            })
        return this.entity;
    }
    async search({columns = [], values = []}) {
        
        let searches = [];
        let placeholders = [];
        let searchValues = [];
        columns.forEach(column => {
            searches.push(`${column} LIKE ?`);
            placeholders.push('?');
        })

        values.forEach(value => {
            searchValues.push(`${value}%`);
        })
        // column LIKE 'value%'
        let searchColumnString = searches.join(' AND ');
        let sql = ` SELECT * 
                    FROM ${this._dbName}.${this.dbTable}
                    WHERE ${searchColumnString}`
        this.entity = await this._db.execute(sql, [...searchValues, id])
            .then(data => {
                let [result, _] = data
                return result
            })
            .catch(err => {
                return err
            })
        return this.entity;
     }
}