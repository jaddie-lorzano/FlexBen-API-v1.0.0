import express, { json } from "express";
import AppRoute from "./routes";

const app = express();

app.use(json());

app.use('/api/v1/', AppRoute);

export default app