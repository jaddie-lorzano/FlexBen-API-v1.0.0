import { EmployeeRepository } from '../repositories/index.js';
import { EmployeeService } from '../services/index.js';
import { FlexPointCalculator } from '../utils/index.js';

let employeeRepository = new EmployeeRepository()

const EmployeeController = {
    // * GET /info
    // US0001: The application should be able to retrieve the user information
    retrieveEmployeeDetails : async (req, res, next) => {
        let employees = await employeeRepository.getAll();
        res.json({
            employees: employees
        })
        // call user service to retrieve the user information
    },
    // * POST /reimbursement/:reimbursementId/addItem
    // US0004: As an employee, I can add a reimbursement item
    addReimbursementItem : async (req, res, next) =>{
        res.send(`call employee service to add reimbursement detail item of ID ${req.params.reimbursementId}`)
        // call employee service to add reimbursement detail item
    },
    // * DELETE /reimbursement/:reimbursementId/:reimbursementItemId/removeItem
    // US0005: As an employee, I can remove a reimbursement item from the list
    removeReimbursementItem : async (req, res, next) => {
        // call employee service to delete reimbursement detail item
    },
    // * POST /reimbursement/:reimbursementId/submit
    // US0006: As an employee, I can submit my reimbursement
    submitReimbursementList : (req, res, next) => {
        // call employee service to submit reimbursement list
    },
    // * GET /reimbursement/:reimbursementId/generateCopy
    // US0007: As an employee, I can generate a printable copy of my reimbursement
    generateReimbursementListCopy : async (req, res, next) => {
        // call user service to generate a copy of a reimbursement list
    },
    // * GET /reimbursement/calaculateFlexPoints?numOfFlexCredit&monthlyRate
    // US008: As an employee, I can calculate my flex points    
    calculateFlexPoints: async (req, res, next) => {
        let flexCredit = req.query.numOfFlexCredit;
        let monthlyRate = req.query.monthlyRate;
        let flexPointCalculator = new FlexPointCalculator(monthlyRate, flexCredit)
        await flexPointCalculator.getResult().catch(err => next(err));
        if (flexPointCalculator.isValidOperation) {
            res.status(200).json({
                status: 200,
                statusText: "OK",
                message: `Total Flex points calculated. Flex Points: ${flexPointCalculator.flexPoints.toFixed(2)}`,
                data: {
                    flexCredit: flexPointCalculator.flexCredit,
                    monthlyRate: flexPointCalculator.monthlyRate,
                    flexPoints: flexPointCalculator.flexPoints
                }
            })
        } else {
            res.status(400).json({
                status: 400,
                statusText: "Bad Request",
                message: `Invalid Request. Number of Flex Credits: '${flexCredit}', Monthly Rate: '${monthlyRate}'`,
                error: {
                    code: "BAD_REQUEST",
                    message: `Invalid Request. Number of Flex Credits: '${flexCredit}', Monthly Rate: '${monthlyRate}'`
                }
            })
        }
    }
}


export default EmployeeController

