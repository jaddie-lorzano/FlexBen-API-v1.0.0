export default class Employee {
    constructor({
        firstName,
        lastName,
        employeeId,
        companyId,
        employeeNumber,
        email,
        isActive = true,
        dateAdded = new Date(),
    }) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._employeeId = employeeId;
        this._companyId = companyId;
        this._employeeNumber = employeeNumber;
        this._email = email;
        this._isActive = isActive;
        this._dateAdded = dateAdded;
    }
    get name() {
        return `this.${this._firstName} ${this._lastName}`
    }
    
    get firstName() { return this._firstName; }
    get lastName() { return this._lastName; }
    get employeeId() { return this._employeeId; }
    get companyId() { return this.companyId; }
    get employeeNumber() { return this.employeeNumber; }
    get email() { return this.email; }
    get isActive() { return this._isActive; }
    get dateAdded() { return this._dateAdded; }

    set firstName(value) { this._firstName = value; return this; }
    set lastName(value) { this._lastName = value; return this;}
    set companyId(value) { this.companyId = value; return this; }
    set employeeNumber(value) { this.employeeNumber = value; return this }
    set email(value) { this.email = value; return this; }

    deactivateEmployee = () => { this._isActive = false; return this }
    activateEmployee = () => { this._isActive = true; return this }
}