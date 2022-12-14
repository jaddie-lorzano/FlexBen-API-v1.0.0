import BaseRepository from './base.repository.js';
import { DB_TABLE } from '../constants/index.js';
import db from '../config/database.config.js'
import {} from 'dotenv/config'

export default class AccountRepository extends BaseRepository {
    constructor() {
        super({
            db: db,
            dbName: process.env.DB_NAME,
            table: DB_TABLE.ACCOUNTS.TABLE_NAME,
            tablePrimaryKeyColumn: DB_TABLE.ACCOUNTS.ACCOUNT_ID
        })
    }
}