import BaseRepository from './base.repository.js';
import { DB_TABLE } from '../constants/index.js';
import db from '../config/database.config.js'
import {} from 'dotenv/config'

export default class FlexCycleCutOffRepository extends BaseRepository {
    constructor() {
        super({
            db: db,
            dbName: process.env.DB_NAME,
            table: DB_TABLE.FLEX_CYCLE_CUT_OFFS.TABLE_NAME,
            tablePrimaryKeyColumn: DB_TABLE.FLEX_CYCLE_CUT_OFFS.FLEX_CYCLE_CUT_OFF_ID
        })
    }
}