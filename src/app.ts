import express, {Request, Response} from 'express';
import { RegisterRoutes } from './routes';
import swaggerUi from "swagger-ui-express";


const app = express();

app.use('/docs', swaggerUi.serve, async (req: Request, res: Response) => {
    return res.send(
        swaggerUi.generateHTML(await import("./swagger.json"))
    )
});


RegisterRoutes(app);
app.listen(8005);

