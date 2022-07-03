import { ERROR_CODE } from '@wealthcare/common';
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const authMiddleware = (req: any, res: Response, next: NextFunction) => {
    // Get token from header:
    const token = req.header('x-auth-token') as string;

    if (!token) {
        return res.status(401).json({
            responseCode: ERROR_CODE.AUTH_ERROR,
            errorMessage: 'No token, authorization denied',
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as any;
        req.auth = decoded.auth;
        next();
    } catch (err) {
        return res.status(401).json({
            responseCode: ERROR_CODE.AUTH_ERROR,
            errorMessage: 'Token is invalid or expired',
        });
    }
}