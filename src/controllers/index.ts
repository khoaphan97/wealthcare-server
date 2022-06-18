import { Router, Request, Response } from "express";

export type RequestMethod = 'get' | 'post' | 'put' | 'delete';

export class Controller {
    protected _router: Router;

    constructor() {
        this._router = Router();
    }

    generateRoutes() { }

    router() {
        return this._router;
    }
}

export { AuthController } from './auth/AuthController';
export { DashboardController } from './dashboard/DashboardController';

