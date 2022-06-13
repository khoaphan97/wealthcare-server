import express, { Request, Response } from 'express';
import { RegisterRoutes } from './routes';
import swaggerUi from "swagger-ui-express";
import dotEnv from 'dotenv';
import { connect } from 'mongoose';

dotEnv.config();

const mongoUri = process.env.MONGO_URI as string;
connect(mongoUri).then(() => {
    console.log('MongoDB connected!')
}).catch(err => {
    console.log(err)
})


const app = express();
app.use('/docs', swaggerUi.serve, async (req: Request, res: Response) => {
    return res.send(
        swaggerUi.generateHTML(await import("./swagger.json"))
    )
});


RegisterRoutes(app);
app.listen(process.env.PORT || 8005);

