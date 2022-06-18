import User from '../../models/User';
import { JsonValidator, ERROR_CODE } from '@wealthcare/common';


const validator = new JsonValidator('object');
validator.require("email").isEmail().compile();
validator.require("password").hasPattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/).compile();


class AuthService {
    async registerUser(email: string, password: string, confirmPassword: string) {
        //Validation first
        validator.require("confirmPassword").equalTo(password).compile();
        validator.validateAll({
            email,
            password,
            confirmPassword
        });
        if (validator.errors) {
            return {
                error: {
                    responseCode: ERROR_CODE.VALIDATION_ERROR,
                    errorMessages: {
                        ...validator.errors
                    }
                }
            }
        }
        
        return 'Success'
    }

    login(email: string, password: string) {
        
    }

    emailExist(): boolean {
        return false;
    }
}

export const authService = new AuthService();