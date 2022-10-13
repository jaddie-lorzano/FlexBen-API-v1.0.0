
export default class ReimbursementService {
    constructor({
        flexReimbursementListModel = FlexReimbursement, // inject reimbursement list model
        flexReimbursementItemModel = FlexReimbursementDetail, // injects reimbursement item model
    }) {
        this._flexReimbursementItemModel = flexReimbursementItemModel,
        this._flexReimbursementListModel = flexReimbursementListModel,
        this.reimbursementList,
        this.reimbursementItem
    }

    createReimbursementItem(reimbursementListId, newReimbursementItemDetail) {
        // return reimbursement item\
        this.reimbursementItem = new this._flexReimbursementItemModel(newReimbursementItemDetail)
        this.reimbursementList = this.reimbursementRepository
            .getReimbursementListById(reimbursementListId)
        this.reimbursementItem = 
            new this._flexReimbursementItemBuilder(newReimbursementDetail);
        this.reimbursementItem
            .checkReimbursmentCutOffStatus()
            .validateReimbursementDate()
            .checkReimbursementItemAmountLimit()
            .addReimbursementItemToList()
            .computeTotalReimbursableAmount()
        return this;
    }
    
    // Employee should be able to remove an item from the reimbursemement list
    deleteReimbursementItem(reimbursementId) {
        this.reimbursementRepository.deleteReimbursementItem(reimbursementId)
    }

    checkReimbursmentCutOffStatus() {
        // return true/false
    }

    validateReimbursementDate() {
        // check if date is <= current date && year == current year
    }

    checkReimbursementItemAmountLimit() {
        // check if amount >= minimum amount | 500 PhP
    }
    
    // Reimbursement item should be added to the reimbursement list
    addReimbursementItemToList() {
        // return message
    }

    // Total reimburseable amount should be returned
    computeTotalReimbursableAmount() {
        // return total reimbursement amount
    }

    // The system should be able to detect if the reimbursement amount is greater than the maximum reimburseable amount for the given cut-off.
    checkReimbursementAmountLimit() {
        // return true/false
    }

    // Initial status of the reimbursement and reimbursement items/details should be "Draft"
    setReimbursementStatus() {

    }

    updateTotalReimbursableAmount() {

    }
    // Upon successful removal of an item, update the total reimburseable amount
    // Only items with status "Draft" should be removable from the reimbursement list.
}