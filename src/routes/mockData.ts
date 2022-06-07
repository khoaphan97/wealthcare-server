import { v4 as uniqueId } from 'uuid';

export const DASHBOARD_MOCK = {
    netWorth: 35000000,
    expense: 17500000,
    income: 22600000,
    chartData: {
        netWorthGrowth: [4560000, 12000000, 18239000, 22350000, 25424000, 4560000, 12000000, 18239000, 22350000, 25424000, 35000000],
        expenses: [
            {
                id: uniqueId(),
                name: 'Food',
                amount: 1560000
            },
            {
                id: uniqueId(),
                name: 'Invest',
                amount: 4000000
            },
            {
                id: uniqueId(),
                name: 'Home',
                amount: 6000000
            },
            {
                id: uniqueId(),
                name: 'Entertaint',
                amount: 4620000
            },
            {
                id: uniqueId(),
                name: 'Health',
                amount: 124000
            }
        ]
    },
    budgets: [
        {
            id: uniqueId(),
            name: 'Entertaint',
            spent: 600000,
            amount: 1200000,
        },
        {
            id: uniqueId(),
            name: 'Food',
            spent: 600000,
            amount: 1200000,
        },
        {
            id: uniqueId(),
            name: 'Health',
            spent: 600000,
            amount: 1200000,
        }, {
            id: uniqueId(),
            name: 'Invest',
            spent: 600000,
            amount: 1200000,
        }
    ]
}