import { Controller, Example, Get, Query, Route, Tags, Response, SuccessResponse } from 'tsoa';
import { TimeFrame } from '../types';
import { DashboardData } from './dashboard';
import { DASHBOARD_MOCK } from './mockData';

@Tags('Dashboard Controllers')
@Route("dashboard")
export class DashboardController extends Controller {
    /**
     * Retrieves the summary data of user finance status
     * @param timeFrame Specific time frame for calculating total expenses and incomes
     * @param from Time range from
     * @param to Time range to
     */
    @Get("/")
    @SuccessResponse('200', 'Success')
    @Example<DashboardData>({
        netWorth: 35000000,
    expense: 17500000,
    income: 22600000,
    chartData: {
        netWorthGrowth: [4560000, 12000000, 18239000, 22350000, 25424000, 4560000, 12000000, 18239000, 22350000, 25424000, 35000000],
        expenses: [
            {
                id: '52907745-7672-470e-a803-a2f8feb52944',
                name: 'Food',
                amount: 1560000
            },
            {
                id: '52907745-7672-470e-a803-a2f8feb52944',
                name: 'Invest',
                amount: 4000000
            },
            {
                id: '52907745-7672-470e-a803-a2f8feb52944',
                name: 'Home',
                amount: 6000000
            },
            {
                id: '52907745-7672-470e-a803-a2f8feb52944',
                name: 'Entertaint',
                amount: 4620000
            },
            {
                id: '52907745-7672-470e-a803-a2f8feb52944',
                name: 'Health',
                amount: 124000
            }
        ]
    },
    budgets: [
        {
            id: '52907745-7672-470e-a803-a2f8feb52944',
            name: 'Entertaint',
            spent: 600000,
            amount: 1200000,
        },
        {
            id: '52907745-7672-470e-a803-a2f8feb52944',
            name: 'Food',
            spent: 600000,
            amount: 1200000,
        },
        {
            id: '52907745-7672-470e-a803-a2f8feb52944',
            name: 'Health',
            spent: 600000,
            amount: 1200000,
        }, {
            id: '52907745-7672-470e-a803-a2f8feb52944',
            name: 'Invest',
            spent: 600000,
            amount: 1200000,
        }
    ]
    }, 'Default')
    public async getDasboardData(
        @Query() timeFrame?: TimeFrame,
        @Query() from?: number,
        @Query() to?: number,
    ): Promise<any> {
        return DASHBOARD_MOCK;
    }
}