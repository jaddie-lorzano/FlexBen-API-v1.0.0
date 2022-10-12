export default class FlexReimbursementDetail {
    constructor({
        flexReimbursementDetailId,
        flexReimbursementId,
        categoryId,
        orNumber,
        nameOfEstablishment,
        tinOfEstablishment,
        amount,
        status,
        dateAdded = new Date()
    }) {
        this._flexReimbursementDetailId = flexReimbursementDetailId;
        this._flexReimbursementId = flexReimbursementId;
        this._categoryId = categoryId;
        this._orNumber = orNumber;
        this._nameOfEstablishment = nameOfEstablishment;
        this._tinOfEstablishment = tinOfEstablishment;
        this._amount = amount;
        this._status = status;
        this._dateAdded = dateAdded;
    }

    get flexReimbursementDetailId() { return this._flexReimbursementDetailId; }
    get flexReimbursementId() { return this._flexReimbursementId; }
    get categoryId() { return this._categoryId; }
    get orNumber() { return this._orNumber; }
    get nameOfEstablishment() { return this._nameOfEstablishment; }
    get tinOfEstablishment() { return this._tinOfEstablishment; }
    get amount() { return this._amount; }
    get status() { return this.status; }
    get dateAdded() { return this.dateAdded; }

    set flexReimbursementId(flexReimbursementId) {
        this._flexReimbursementId = flexReimbursementId;
        return this;
    }
    set categoryId(categoryId) {
        this._categoryId = categoryId;
        return this;
    }
    set orNumber(orNumber) {
        this._orNumber = orNumber;
        return this;
    }
    set nameOfEstablishment(nameOfEstablishment) {
        this._nameOfEstablishment = nameOfEstablishment;
        return this;
    }
    set tinOfEstablishment(tinOfEstablishment) { 
        this._tinOfEstablishment = tinOfEstablishment;
        return this;
    }
    set amount(amount) { 
        this._amount = amount; 
        return this; 
    }
    set status(status) {
        this._status = status;
        return this;
    }
    set dateAdded(dateAdded) {
        this._dateAdded = dateAdded;
        return this;
    }
}