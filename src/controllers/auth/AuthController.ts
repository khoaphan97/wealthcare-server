import { Request, Response } from "express";
import { Controller } from "..";
import { authService } from "./AuthService";

export class AuthController extends Controller {

    generateRoutes(): void {
        this.registerUser();
    }

    private registerUser() {
        this._router.post('/register', async (req: Request, res: Response) => {
            const { email, password, confirmPassword } = req.body;
            try {
                const result = await authService.registerUser(email, password, confirmPassword) as any;
                if (result.error) {
                    return res.status(422).json(result.error);
                }
                return res.json({
                    status: 'success',
                })
            } catch (err) {
                res.status(500).json({
                    loll: 'annyy',
                })
            }
        });
    }

    // private getUserProfile() {
    //     this._router.get('/register', (request: Request, response: Response) => {
    //         // Run Auth service
    //     });
    // }
}