export default class Role {
    constructor({
        roleId,
        name,
        description
    }) {
        this._roleId = roleId;
        this._name = name;
        this._description = description;
    }

    get roleId() { return this._roleId; }
    get name() { return this._name; }
    get description() { return this._description; }

    set name(name) { 
        this._name = name;
        return this; 
    }
    set description(description) {
        this._description = description;
        return this;
    }
}