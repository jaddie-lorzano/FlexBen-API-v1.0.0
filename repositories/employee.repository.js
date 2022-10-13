import BaseRepository from './base.repository.js';
import { DB_TABLE } from '../constants/index.js';
import db from '../config/database.config.js'
import {} from 'dotenv/config'
export default class EmployeeRepository extends BaseRepository {
    constructor() {
        super({
            db: db,
            dbName: process.env.DB_NAME,
            table: DB_TABLE.EMPLOYEES.TABLE_NAME,
            tablePrimaryKeyColumn: DB_TABLE.EMPLOYEES.EMPLOYEE_ID,
            tableColumnList: [
                DB_TABLE.EMPLOYEES.EMPLOYEE_ID,
                DB_TABLE.EMPLOYEES.COMPANY_ID,
                DB_TABLE.EMPLOYEES.ROLE_ID,
                DB_TABLE.EMPLOYEES.EMPLOYEE_NUMBER,
                DB_TABLE.EMPLOYEES.FIRST_NAME,
                DB_TABLE.EMPLOYEES.LAST_NAME,
                DB_TABLE.EMPLOYEES.EMAIL,
                DB_TABLE.EMPLOYEES.IS_ACTIVE,
                DB_TABLE.EMPLOYEES.DATE_ADDED
            ]
        })
    }
}