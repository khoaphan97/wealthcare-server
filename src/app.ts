import express, { Request, Response, NextFunction } from 'express';
import dotEnv from 'dotenv';
import { connect } from 'mongoose';
import { Routes } from './routes';

dotEnv.config();

const mongoUri = process.env.MONGO_URI as string;
connect(mongoUri).then(() => {
    console.log('MongoDB connected! Test heroku deploy')
}).catch(err => {
    console.log(err)
})


const app = express();
app.use(express.json());

Routes.map(route => {
    const controller = route.controller;
    controller.generateRoutes();
    app.use(`/api/${route.path}`, controller.router());
})


app.listen(process.env.PORT as string | 8005);



