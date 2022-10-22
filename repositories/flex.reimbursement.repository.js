import BaseRepository from './base.repository.js';
import { DB_TABLE } from '../constants/index.js';
import db from '../config/database.config.js'
import {} from 'dotenv/config'

export default class FlexReimbursementRepository extends BaseRepository {
    constructor() {
        super({
            db: db,
            dbName: process.env.DB_NAME,
            table: DB_TABLE.FLEX_REIMBURSEMENTS.TABLE_NAME,
            tablePrimaryKeyColumn: DB_TABLE.FLEX_REIMBURSEMENTS.FLEX_REIMBURSEMENT_ID
        })
    }
    async getReimbursementsByCutOffId (cutOffId) {
        let sql = ` SELECT * 
                    FROM ${this._dbName}.${this.dbTable} 
                    WHERE ${DB_TABLE.FLEX_REIMBURSEMENTS.FLEX_CUT_OFF_ID} = ?`
        this.entity = await this._db.execute(sql, [cutOffId])
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