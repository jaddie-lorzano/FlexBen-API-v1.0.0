import { Router } from "express"
import { AdminController, UserController } from "../controllers/index.js"

const AdminRoute = Router();
const ReimbursementRoute = Router();

AdminRoute.use('/reimbursements/', ReimbursementRoute)
AdminRoute.use('/info', (req, res, next) => {
    res.send('get admin user information')
})


AdminRoute
    .route('/reimbursements/:reimbursementId(\\d+)/approve')
    .put(AdminController.approveReimbursement) 
    // US0012: As an HR, I can approve submitted 
    // reimbursements
AdminRoute
    .route('/reimbursements/:reimbursementId(\\d+)/reject')
    .put(AdminController.rejectReimbursement) 
    // US0013: As an HR, I can reject submitted \
    // reimbursements
AdminRoute    
    .route('/reimbursements/:reimbursementId(\\d+)')
    .get(AdminController.viewReimbursementById) 
    // US0010: As an HR, I can view the details 
    // of a reimbursement
AdminRoute
    .route('/reimbursements/search')
    .get(AdminController.searchReimbursements) 
    // US0011: As an HR, I can search for a 
    // particular reimbursement submitted by an employee
AdminRoute
    .route('/reimbursements')
    .get(AdminController.getReimbursements) 
    // US009: As an HR, I can view all 
    // reimbursements submitted in a cut-off
AdminRoute.use('/logout', UserController.logout)
AdminRoute.use('/', (req, res, next) => {
    console.log("Welcome admin")
    res.send('Welcome admin')
})

export default AdminRoute