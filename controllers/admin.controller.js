const AdminController = {
    getReimbursements : async (req, res, next) => {
        res.send("Retrived all reimbursements");
    },
    viewReimbursementById : async (req, res, next) => {
        res.send("Retrived individual reimbursement")
    },
    searchReimbursements : async (req, res, next) => {
        res.send("Search reimbursements");
    },
    approveReimbursement : async (req, res, next) => {
        res.send("Approve reimbursement!")
    },
    rejectReimbursement : async (req, res, next) => {
        res.send("Reject reimbursement!")
    }
}

export default AdminController