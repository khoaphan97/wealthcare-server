import { Controller, Get, Query, Route,  } from 'tsoa';
import { DASHBOARD_MOCK } from './mockData';

@Route("dashboard")
export class DashboardController extends Controller {
    @Get("/")
    public async getUser(
        @Query() timeFrame?: string,
        @Query() from?: number,
        @Query() to?: number,
    ): Promise<any> {
        return DASHBOARD_MOCK;
    }
}