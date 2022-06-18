import { Controller } from "./controllers";
import { AuthController, DashboardController } from './controllers';

export const Routes: {
    path: string;
    controller: Controller;
}[] = [
        {
            path: 'auth',
            controller: new AuthController(),
        },
        {
            path: 'dashboard',
            controller: new DashboardController(),
        }
    ]