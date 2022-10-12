import { ReimbursementService } from "../services";
export default class EmployeeService {
    constructor({
        reimbursementService = ReimbursementService, // injects the reimbursement service
    }) {
        this._reimbursementService = reimbursementService
    }

    // USER STORIES GENERAL

    // * GET /employee/:id/details
    // US0001: The application should be able to retrieve the user information
    // Application should be able to retrieve employee details of logged in user:
    // - First name
    // - Last name
    // - Role

    getEmployeeDetails() {
        // return employee details [ firstName, lastName, role ]
    }

    // * POST /login
    // US0002: As an employee, I can login to the system using username and password
    // Employee should be able to provide email and password to log in. These should be validated against the database.
    
    login(username, password) {
        // login
    }

    // * POST /logout
    // US0003: As an employee, I can logout from the system
    // Employee should be able to logout from the system
    // Upon logout, user should no longer be able to access any APIs other than login

    logout() {
        // log out
    }

    // USER STORIES FOR EMPLOYEE

    // * POST /reimbursement/:reimbursementId/addItem
    // US0004: As an employee, I can add a reimbursement item
    // Employee should be able to add a reimbursement item to an active cut-off with the following details:
    // - Date (mm/dd/yyyy) - add validation rules (you should not be able to add a different year and there should be no date greater than the current date)
    // - OR Number
    // - Name of establishment
    // - TIN of establishment
    // - Amount (minimum 500, this amount should be configurable) 
    // - Category (from category catalog)

    addReimbursementItem(reimbursementListId, newReimbursementItemDetail) {
        // create reimbursement item
        this._reimbursementService.createReimbursementItem(reimbursementListId, newReimbursementItemDetail);
        return this;
    }

    // * DELETE /reimbursement/:reimbursementId/:reimbursementItemId/removeItem
    // US0005: As an employee, I can remove a reimbursement item from the list
    removeReimbursementItemFromList(reimbursementItemId) {
        this._reimbursementService.deleteReimbursementItem(reimbursementItemId);
    }

    // * POST /reimbursement/:reimbursementId/submit
    // US0006: As an employee, I can submit my reimbursement

    // * GET /reimbursement/:reimbursementId/generateCopy
    // US0007: As an employee, I can generate a printable copy of my reimbursement

    // * GET /reimbursement/:reimbursementId/calaculateFlexPoints?numOfFlexCredit&monthlyRate
    // US008: As an employee, I can calculate my flex points
}