import { Request, Response } from 'express';

export type QueryRequest<Q> = Request<{}, {}, {}, Q>
export type BodyRequest<T> = Request<{}, T, {}, {}>
export type SuccessResponse<T> = Response<T>