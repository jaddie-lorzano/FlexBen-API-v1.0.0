const UserController = {
    retrieveUserInformation : async (req, res, next) => {
        res.send("Retrieve user Information successfully")
    },
    login : async (req, res, next) => {
        res.send("User login successfully");
    },
    logout : async (req, res, next) => {
        res.send("User logout successfully")
    }
};

export default UserController;