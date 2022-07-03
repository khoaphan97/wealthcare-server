import { ERROR_CODE } from "@wealthcare/common"

export interface DefaultError {
    error: {
        responseCode: ERROR_CODE,
        errorMessage?: string;
        errorMessages?: {
            [key: string]: string;
        }
    }
}