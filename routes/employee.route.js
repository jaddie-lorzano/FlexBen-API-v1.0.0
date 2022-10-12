import { Router } from "express"
import EmployeeController from "../controllers/employee.controller.js"

const EmployeeRoute = Router()

EmployeeRoute
    .route('/')
    .get(EmployeeController.getAllEmployees)
    .post(EmployeeController.createEmployee)

EmployeeRoute
    .route('/:id(\\d+)')
    .get(EmployeeController.getEmployeeById)
    .put(EmployeeController.updateEmployeeById)
    .delete(EmployeeController.deleteEmployeeById)

export default EmployeeRoute