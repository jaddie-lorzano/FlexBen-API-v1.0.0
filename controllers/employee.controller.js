import { EmployeeRepository } from '../repositories/index.js';
import { EmployeeService } from '../services/index.js';
import { FlexPointCalculator } from '../utils/index.js';

let employeeRepository = new EmployeeRepository()

const EmployeeController = {
    // US0001: The application should be able to retrieve the user information
    retrieveEmployeeDetails : async (req, res, next) => {
        await employeeRepository.getById(4)
            .then(entities => {
                let employees = entities
                res.json({
                    employees: employees
                })
            })
            .catch(err => {next(err);});
        // call user service to retrieve the user information
    },
    // US0004: As an employee, I can add a reimbursement item
    addReimbursementItem : async (req, res, next) =>{
        res.send(`call employee service to add reimbursement detail item of ID ${req.params.reimbursementId}`)
        // call employee service to add reimbursement detail item
    },
    // US0005: As an employee, I can remove a reimbursement item from the list
    removeReimbursementItem : async (req, res, next) => {
        // call employee service to delete reimbursement detail item
    },
    // US0006: As an employee, I can submit my reimbursement
    submitReimbursementList : (req, res, next) => {
        // call employee service to submit reimbursement list
    },
    // US0007: As an employee, I can generate a printable copy of my reimbursement
    generateReimbursementListCopy : async (req, res, next) => {
        // call user service to generate a copy of a reimbursement list
    },
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

