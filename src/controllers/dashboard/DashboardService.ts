import { DASHBOARD_MOCK } from "./mockData";

export interface DashboardData {
    netWorth: number;
    expense: number;
    income: number;
    chartData: {
        netWorthGrowth: number[];
        expenses: {
            id: string;
            name: string;
            amount: number;
        }[]
    };
    budgets: {
        id: string;
        name: string;
        spent: number;
        amount: number;
    }[]
}

class DashboardService {
    getDashboardData(params: {
        timeFrame?: number;
        from?: number;
        to?: number;
    }): Promise<DashboardData> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(DASHBOARD_MOCK)
            }, 200);
        })
    }
}

export const dashboardService = new DashboardService();