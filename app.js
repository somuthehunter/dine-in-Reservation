import express, { urlencoded } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {dbConnection} from './database/db.js'
import ReservationRouter from "./routes/reservation.js"

const app = express();
dotenv.config({ path: './config/config.env' });
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    credentials: true
}));
app.use(express.json());
app.use(urlencoded({ extended: true }));
dbConnection();

app.use("/api/reserve", ReservationRouter);
export default app;