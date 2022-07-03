import { Request, Response } from "express";
import { Controller } from "..";
import { authService } from "./AuthService";

export class AuthController extends Controller {

    generateRoutes(): void {
        this.createRegisterRoute();
        this.createLoginRoute();
    }

    private createRegisterRoute() {
        this._router.post('/register', async (req: Request, res: Response) => {
            const { name, email, password, confirmPassword } = req.body;
            try {
                const result = await authService.registerUser(name, email, password, confirmPassword) as any;
                return res.json(result);
            } catch (error: any) {
                if (error.error) {
                    return res.status(422).json(error.error);
                }
            }
        });
    }

    private createLoginRoute() {
        this._router.post('/login', async (req: Request, res: Response) => {
            const { email, password } = req.body;
            try {
                const result = await authService.login(email, password) as any;
                return res.json(result);
            } catch (error: any) {
                if (error.error) {
                    return res.status(422).json(error.error);
                }
            }
        })
    }

    // private getUserProfile() {
    //     this._router.get('/register', (request: Request, response: Response) => {
    //         // Run Auth service
    //     });
    // }
}