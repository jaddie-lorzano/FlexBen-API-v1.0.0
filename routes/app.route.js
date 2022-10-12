import { Router } from "express";
import EmployeeRoute from "./employee.route.js";

let AppRoute = Router();

AppRoute.route('/employee', EmployeeRoute);

export default AppRoute;