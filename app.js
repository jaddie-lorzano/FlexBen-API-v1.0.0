import express, { json } from "express";
import jwt from 'jsonwebtoken';
import AppRoute from "./routes/index.js";
import {} from 'dotenv/config'
import { logErrors, clientErrorHandler, errorHandler } from './helpers/error.helper.js';


const app = express();
app.use(json());

// app.use('/api/v1/', authenticateToken , AppRoute);
app.use('/api/v1/' , AppRoute);

// Configure exception logger
app.use(logErrors);
// Configure client error handler
app.use(clientErrorHandler);
// Configure catch-all exception middleware last
app.use(errorHandler);


export default app