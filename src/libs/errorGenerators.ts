import { ERROR_CODE } from "@wealthcare/common";
import { DefaultError } from "./types";

export const credentialError: () => DefaultError = (message?: string) => {
    return {
        error: {
            responseCode: ERROR_CODE.AUTH_ERROR,
            errorMessage: message || "Invalid credentials",
        }
    }
}