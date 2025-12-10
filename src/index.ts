import dotenv from "dotenv";
dotenv.config();

import { Request, Response } from "express";
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from "morgan";
import StudentRouter from "./students/route/student.route";
const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet({
    xPoweredBy: true
}));
app.use(cors());
app.use(morgan('dev'));

app.get('/',(req: Request, res: Response)=> {
    res.send("iftekher mahmud pervez");
})

app.use('/students',StudentRouter);

app.listen(PORT,() => {
    console.log('server listening http://localhost:'+ PORT);
})