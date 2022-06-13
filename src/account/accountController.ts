import { Controller, Example, Get, Query, Route, Tags, Response, SuccessResponse, Path, Post, Body } from 'tsoa';
import Account from './Account';

@Tags('Account Controllers')
@Route("account")
export class AccountController extends Controller {
    /**
     * Get account by id
     * @param accountId _ string
     */
    @Get("{accountId}")
    @SuccessResponse('200', 'Success')
    public async getAccountById(
        @Path() accountId: string
    ): Promise<any> {
        try {
            const account = await Account.findById(accountId);
            if(account) {
                return account;
            }
            return {
                code: 'NOT_FOUND',
                message: 'This instance is not exist'
            }
        } catch(err) {
            this.setStatus(500);
            console.log(err)
        }
    }
    @Post("/")
    public async createNewAccount(
        
    ){

    }

}