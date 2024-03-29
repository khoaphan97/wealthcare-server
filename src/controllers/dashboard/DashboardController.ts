import { Request, Response } from "express";
import { Controller } from "..";
import { authMiddleware } from "../../middlewares/auth";
import { dashboardService } from "./DashboardService";
export class DashboardController extends Controller {
    generateRoutes(): void {
        this.getDashboardData();
    }

    getDashboardData() {
        this._router.get('/', authMiddleware, async (req: Request, res: Response) => {
            try {
                const result = await dashboardService.getDashboardData({});
                res.json(result)
            } catch (err) {
                res.status(422).json({
                    loll: 'annyy',
                })
            }
        });
    }
}