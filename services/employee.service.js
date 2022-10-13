import { ReimbursementService } from "./index.js";
export default class EmployeeService {
    constructor({
        reimbursementService = ReimbursementService, // injects the reimbursement service
    }) {
        this._reimbursementService = reimbursementService
    }

    

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