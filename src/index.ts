import express from 'express';
import dashboardRouter from './routes/dashboard';
import swaggerUI from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

const app = express();

app.use('/api/dashboard', dashboardRouter);

app.listen(8005)

