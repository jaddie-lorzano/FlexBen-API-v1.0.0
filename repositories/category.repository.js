import BaseRepository from './base.repository.js';
import { DB_TABLE } from '../constants/index.js';
import db from '../config/database.config.js'
import {} from 'dotenv/config'
import { checkResults } from '../utils/index.js';

export default class CategoryRepository extends BaseRepository {
    constructor() {
        super({
            db: db,
            dbName: process.env.DB_NAME,
            table: DB_TABLE.CATEGORIES.TABLE_NAME,
            tablePrimaryKeyColumn: DB_TABLE.CATEGORIES.CATEGORY_ID
        })
    }
    async getCategoryId(category_name) {
        let sql = `SELECT ${DB_TABLE.CATEGORIES.CATEGORY_ID} FROM ${process.env.DB_NAME}.${DB_TABLE.CATEGORIES.TABLE_NAME} WHERE ${DB_TABLE.CATEGORIES.NAME} = ?`
        let result
        await this._db.execute(sql, [category_name])
            .then(data => {
                let [results, _] = data
                result = results[0]
            })
            .catch(err => {
                throw err
            })
        return result
    }
}