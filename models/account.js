export default class Account {
    constructor({
        accountId,
        employeeId,
        password,
        isActive,
        dateUpdated = new Date()
    }) {
        this._accountId = accountId;
        this._employeeId = employeeId;
        this._password = password;
        this._isActive = isActive;
        this._dateUpdated = dateUpdated;
    }
    get accountId() { return this._accountId; }
    get employeeId() { return this._employeeId; }
    get password() { return this._password; }
    get isActive() { return this._isActive; }
    get dateUpdated() { return this._dateUpdated; }

    set employeeId(employeeId) { 
        this._employeeId = employeeId;
        return this; 
    }
    set password(password) { 
        this._password = password;
        return this; 
    };

    deactivateAccount() { 
        this._isActive = false;
        return this; 
    }
    activateAccount() { 
        this._isActive = true;
        return this; 
    }
    updateAccount() {
        this._dateUpdated = new Date(); 
        return this;
    }
}