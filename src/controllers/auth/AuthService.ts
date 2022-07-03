import User from '../../models/User';
import { JsonValidator, ERROR_CODE } from '@wealthcare/common';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { credentialError } from '../../libs/errorGenerators';


class AuthService {
    async registerUser(name: string, email: string, password: string, confirmPassword: string): Promise<any> {
        return new Promise(async (resolve, reject) => {
            //Validation first
            const validator = new JsonValidator('object');
            validator.require("name").isString().minLength(6).compile();
            validator.require("email").isEmail().compile();
            validator.require("password").hasPattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/).compile();
            validator.require("confirmPassword").equalTo(password).compile();
            validator.validateAll({
                name,
                email,
                password,
                confirmPassword
            });
            // Handle validation failed
            if (validator.errors) {
                reject({
                    error: {
                        responseCode: ERROR_CODE.VALIDATION_ERROR,
                        errorMessages: {
                            ...validator.errors
                        }
                    }
                });
                return;
            }
            // Validation success
            try {
                let user = await User.findOne({ email });
                if (user) {
                    reject({
                        error: {
                            responseCode: ERROR_CODE.USER_EXIST,
                            errorMessages: 'Email already existed',
                        }
                    })
                }
                user = new User({
                    name,
                    email,
                    password,
                });
                const salt = await bcrypt.genSalt(10);
                user.password = await bcrypt.hash(password, salt);

                await user.save();

                const payload = {
                    auth: {
                        id: user.id
                    }
                }
                jwt.sign(payload, process.env.JWT_SECRET as string, {
                    expiresIn: 60
                }, (err, token) => {
                    if (err) throw err;
                    resolve({
                        status: "success",
                        token,
                    });
                });
            } catch (err) {
                reject({
                    error: {
                        responseCode: ERROR_CODE.SERVER_ERROR,
                        errorMessage: err,
                    }
                })
            }
        });
    }

    login(email: string, password: string): Promise<any> {
        return new Promise(async (resolve, reject) => {
            const validator = new JsonValidator('object');
            validator
                .require("email").isEmail().compile();
            validator
                .require("password")
                .compile();
            validator.validateAll({
                email,
                password,
            });

            if (validator.errors) {
                reject({
                    error: {
                        responseCode: ERROR_CODE.VALIDATION_ERROR,
                        errorMessages: {
                            ...validator.errors
                        }
                    }
                });
                return;
            }
            // Get user
            try {
                let user = await User.findOne({ email });
                if (!user) {
                    return reject(credentialError());
                }
                const isMatch = await bcrypt.compare(password, user.password);
                if (!isMatch) {
                    return reject(credentialError());
                }

                const payload = {
                    auth: {
                        id: user.id
                    }
                }
                jwt.sign(payload, process.env.JWT_SECRET as string, {
                    expiresIn: 60
                }, (err, token) => {
                    if (err) throw err;
                    resolve({
                        status: "success",
                        token,
                    });
                });

            } catch (err) {
                reject({
                    error: {
                        responseCode: ERROR_CODE.SERVER_ERROR,
                        errorMessage: "Internal server error",
                    }
                })
            }

        })
    }

    emailExist(): boolean {
        return false;
    }
}

export const authService = new AuthService();