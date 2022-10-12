import { Router } from "express";
import AdminRoute from "./admin.route";
import EmployeeRoute from "./employee.route";

const AppRoute = Router();

AppRoute.route('/', EmployeeRoute);
AppRoute.route('/admin/', AdminRoute);

export default AppRoute;