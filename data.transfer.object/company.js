export default class Company {
    constructor({
        companyId,
        code,
        name,
        description,
        logo
    }) {
        this._companyId = companyId;
        this._code = code;
        this._name = name;
        this._description = description;
        this._logo = logo;
    };

    get companyId() { return this._companyId; }
    get code() { return this._code; }
    get name() { return this._name; }
    get description() { return this._description; }
    get logo() { return this._logo; }

    set code(code) { 
        this._code = code;
        return this;
    }
    set name(name) { 
        this._name = name;
        return this;
    }
    set description(description) {
        this._description = description;
    }
    set logo(logo) { 
        this._logo = logo;
        return this;
    }
}