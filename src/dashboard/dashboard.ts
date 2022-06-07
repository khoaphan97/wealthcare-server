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