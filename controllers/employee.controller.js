import Employee from '../models/employee.js'
import BaseRepository from '../repositories/base.repository.js'

const EmployeeController = {
    getAllEmployees: async (req, res, next) => {
        console.log('GET All Employees');
    },
    getEmployeeById: async (req, res, next) => {
        console.log('GET Employee By ID');
    },
    createEmployee: async (req, res, next) => {
        console.log('CREATE Employee');
    },
    updateEmployeeById: async (req, res, next) => {
        console.log('UPDATE Employee By ID');
    },
    deleteEmployeeById: async (req, res, next) => {
        console.log('DELETE Employee By ID');
    },

}

export default EmployeeController