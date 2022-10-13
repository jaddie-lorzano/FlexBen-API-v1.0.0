import { Router } from "express";
import AdminRoute from "./admin.route.js";
import EmployeeRoute from "./employee.route.js";

const AppRoute = Router();

AppRoute.use('/admin/', AdminRoute);
AppRoute.use('/', EmployeeRoute);

export default AppRoute;