import { DB_TABLE } from "../constants/index.js";
const ACCOUNT = DB_TABLE.ACCOUNTS
export default class AccountDTO {
    constructor({
        accountId,
        employeeId,
        password,
        isActive,
        dateUpdated
    }) {
        this[ACCOUNT.ACCOUNT_ID] = accountId;
        this[ACCOUNT.EMPLOYEE_ID] = employeeId;
        this[ACCOUNT.PASSWORD] = password;
        this[ACCOUNT.IS_ACTIVE] = isActive;
        this[ACCOUNT.DATE_UPDATED] = dateUpdated;
    }
    get accountId() { return this[ACCOUNT.ACCOUNT_ID]; }
    get employeeId() { return this[ACCOUNT.EMPLOYEE_ID]; }
    get password() { return this[ACCOUNT.PASSWORD]; }
    get isActive() { return this[ACCOUNT.IS_ACTIVE]; }
    get dateUpdated() { return this[ACCOUNT.DATE_UPDATED]; }

    set employeeId(employeeId) { this[ACCOUNT.EMPLOYEE_ID] = employeeId; return this; }
    set password(password) { this[ACCOUNT.PASSWORD] = password; return this; };
    set isActive(isActive) { this[ACCOUNT.IS_ACTIVE] = isActive; return this; }
    set dateUpdated(dateUpdated) { this[ACCOUNT.DATE_UPDATED] = dateUpdated; }
}