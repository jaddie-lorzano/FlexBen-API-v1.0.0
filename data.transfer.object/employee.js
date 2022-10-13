import { DB_TABLE } from '../constants/index.js'
const EMPLOYEE = DB_TABLE.EMPLOYEES
export default class EmployeeDTO {
    constructor({
        employeeId,
        companyId = 0,
        roleId = 0,
        firstName = 'First Name',
        lastName = 'Last Name',
        employeeNumber = 0,
        email = 'username@domain.com',
        isActive = true,
        dateAdded = new Date(),
    }) {
        this[EMPLOYEE.EMPLOYEE_ID] = employeeId ?? "";
        this[EMPLOYEE.COMPANY_ID] = companyId;
        this[EMPLOYEE.ROLE_ID] = roleId;
        this[EMPLOYEE.EMPLOYEE_NUMBER] = employeeNumber;
        this[EMPLOYEE.FIRST_NAME] = firstName;
        this[EMPLOYEE.LAST_NAME] = lastName;
        this[EMPLOYEE.EMAIL] = email;
        this[EMPLOYEE.IS_ACTIVE] = isActive;
        this[EMPLOYEE.DATE_ADDED] = dateAdded;
    }
    get employeeId() { return this[EMPLOYEE.EMPLOYEE_ID]; }
    get companyId() { return this[EMPLOYEE.COMPANY_ID]; }
    get roleId() { return this[EMPLOYEE.ROLE_ID]; }
    get employeeNumber() { return this[EMPLOYEE.EMPLOYEE_NUMBER]; }
    get firstName() { return this[EMPLOYEE.FIRST_NAME]; }
    get lastName() { return this[EMPLOYEE.LAST_NAME]; }
    get email() { return this[EMPLOYEE.EMAIL]; }
    get isActive() { return this[EMPLOYEE.IS_ACTIVE]; }
    get dateAdded() { return this[EMPLOYEE.DATE_ADDED]; }

    set companyId(value) { this[EMPLOYEE.COMPANY_ID] = value; return this; }
    set roleId(value) { this[EMPLOYEE.ROLE_ID] = value; return this; }
    set employeeNumber(value) { this[EMPLOYEE.EMPLOYEE_NUMBER] = value; return this }
    set firstName(value) { this[EMPLOYEE.FIRST_NAME] = value; return this; }
    set lastName(value) { this[EMPLOYEE.LAST_NAME] = value; return this; }
    set email(value) { this[EMPLOYEE.EMAIL] = value; return this; }
    set isActive(value) { this[EMPLOYEE.IS_ACTIVE] = value; return this; }
    set dateAdded(value) { this[EMPLOYEE.DATE_ADDED] = value; return this; }
}