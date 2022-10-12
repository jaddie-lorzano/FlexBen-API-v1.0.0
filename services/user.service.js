export default class UserService {
    constructor({

    }) {

    }
    
    // USER STORIES GENERAL

    // * GET /info
    // * US0001: The application should be able to retrieve the user information
    // Application should be able to retrieve employee details of logged in user:
    // - First name
    // - Last name
    // - Role

    getEmployeeDetails() {
        // return employee details [ firstName, lastName, role ]
    }

    // * POST /login
    // * US0002: As an employee, I can login to the system using username and password
    // Employee should be able to provide email and password to log in. These should be validated against the database.
    
    login(username, password) {
        // login
    }

    // * POST /logout
    // * US0003: As an employee, I can logout from the system
    // Employee should be able to logout from the system
    // Upon logout, user should no longer be able to access any APIs other than login

    logout() {
        // log out
    }

    // USER STORIES FOR EMPLOYEE

    // * POST /reimbursement/:reimbursementId/addItem
    // * US0004: As an employee, I can add a reimbursement item
    // Employee should be able to add a reimbursement item to an active cut-off with the following details:
    // - Date (mm/dd/yyyy) - add validation rules (you should not be able to add a different year and there should be no date greater than the current date)
    // - OR Number
    // - Name of establishment
    // - TIN of establishment
    // - Amount (minimum 500, this amount should be configurable) 
    // - Category (from category catalog)
}