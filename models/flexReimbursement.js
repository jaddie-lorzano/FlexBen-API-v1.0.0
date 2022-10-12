export default class FlexReimbursement {
    constructor({
        flexReimbursementId,
        employeeId,
        flexCutOffId,
        totalReimbursementAmount,
        dateSubmitted,
        status,
        dateUpdated = new Date(),
        transactionNumber
    }) {
        this._flexReimbursementId = flexReimbursementId;
        this._employeeId = employeeId;
        this._flexCutOffId = flexCutOffId;
        this._totalReimbursementAmount = totalReimbursementAmount;
        this._dateSubmitted = dateSubmitted;
        this._status = status;
        this._dateUpdated = dateUpdated;
        this._transactionNumber = transactionNumber;
    }

    get flexReimbursementId() { return this._flexReimbursementId; }
    get employeeId() { return this._employeeId; }
    get flexCutOffId() { return this._flexCutOffId; }
    get totalReimbursementAmount() { return this.totalReimbursementAmount; }
    get dateSubmitted() { return this._dateSubmitted; }
    get status() { return this._status; }
    get dateUpdated() { return this._dateUpdated; }
    get transactionNumber() { return this._transactionNumber; }

    set employeeId(employeeId) {
        this._employeeId = employeeId;
        return this;
    }
    set flexCutOffId(flexCutOffId) {
        this._flexCutOffId = flexCutOffId;
        return this;
    }
    set totalReimbursementAmount(totalReimbursementAmount) {
        this._totalReimbursementAmount = totalReimbursementAmount;
        return this;
    }
    set dateSubmitted(dateSubmitted) {
        this._dateSubmitted = dateSubmitted;
        return this;
    }
    set transactionNumber(transactionNumber) {
        this._transactionNumber = transactionNumber;
        return this;
    }

}