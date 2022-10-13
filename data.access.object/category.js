export default class Category {
    constructor({
        categoryId,
        code,
        name,
        description,
        dateAdded = new Date(),
        addedBy,
        updatedDate,
        updatedBy 
    }) {
        this._categoryId = categoryId;
        this._code = code;
        this._name = name;
        this._description = description;
        this._dateAdded = dateAdded;
        this._addedBy = addedBy;
        this._updatedDate = updatedDate;
        this._updatedBy = updatedBy;
    }

    get categoryId() { return this._categoryId; }
    get code() { return this._code; }
    get name() { return this._name; }
    get description() { return this._description; }
    get dateAdded() { return this._dateAdded; }
    get updatedDate() { return this._updatedDate; }
    get addedBy() { return this._addedBy; }
    get updatedBy() { return this._updatedBy; }

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
        return this;
    }
    set dateAdded(dateAdded) {
        this._dateAdded = dateAdded;
        return this;
    }
    set updatedDate(updatedDate) {
        this._updatedDate = updatedDate;
        return this;
    }
    set addedBy(addedBy) {
        this._addedBy = addedBy;
        return this;
    }
    set updatedBy(updatedBy) {
        this._updatedBy = updatedBy;
        return this;
    }
    updateCategory() {
        this.updatedBy = new Date();
        return this;
    }
}