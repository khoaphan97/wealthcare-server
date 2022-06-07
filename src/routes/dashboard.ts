import express, { Request, Response } from 'express';
import { QueryRequest } from '../types/utils';
import { DASHBOARD_MOCK } from './mockData';
const router = express.Router();

router.get('/', (
    req: QueryRequest<{
        timeFrame?: string;
        from?: number;
        to?: number;
    }>,
    res
) => {
    const { timeFrame, from, to } = req.query;
    if(timeFrame) {
        //Filter with time frame

    } else if(Boolean(from) && Boolean(to)) {
        //Filter with range
    }
    res.json(DASHBOARD_MOCK)
});

export default router;