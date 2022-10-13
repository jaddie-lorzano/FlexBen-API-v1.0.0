
export default class BaseRepository {
    constructor({
        db,
        dbName,
        table,
        tablePrimaryKeyColumn,
        tableColumnList
    }) {
        this._db = db;
        this._dbName = dbName
        this.dbTable = table;
        this.tablePrimaryKeyColumn = tablePrimaryKeyColumn;
        this.columnList = tableColumnList;
        this.valuesList = [];
        this.placeholders = [];
        this.entities = [];
    }
    async getAll () {
        let sql = ` SELECT * 
                    FROM ${this._dbName}.${this.dbTable}`
        this.entities = await this._db.execute(sql)
            .then(data => {
                let [result, _] = data;
                console.log(JSON.stringify(result));
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
        console.log(`${sql}, [${id}]`)
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
        Object.values(entity)
            .forEach(value => {
                this.valuesList.push(value);
                this.placeholders.push('?')
            })
        let placeholdersString = this.placeholders.join(',')
        let dbValuesList = this.valuesList
        let sql = ` INSERT INTO ${this._dbName}.${this.dbTable} 
                    (${this.columnList}) 
                    VALUES (${placeholdersString})`;
        console.log(`${sql}, ${dbValuesList}`);
        let newEntityId = await db.execute(sql, dbValuesList)
            .then(data => { 
                let [result, _] = data; return result.insertId
            })
            .catch(err => {
                return err
            });
        return newEntityId;
    }
}