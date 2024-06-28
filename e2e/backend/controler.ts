import Initializer from "@e2e/api/initializer";
import { Const, TEST_USER } from "@e2e/helpers/constants";

class Controler extends Initializer{

    constructor(page, request){
        super(page, request)
    }

    async createUser(){
        const response = await this.request.post(
            process.env.USER_ENDPOINT, {
                data : TEST_USER
            });
        return await response.json();
    }

    async getAuthorizationToken(){
        const LOGIN_USER: IRandomUser = {
            userName: TEST_USER.userName,
            password: TEST_USER.password
        }
        const response = await this.request.post(
            process.env.TOKEN_ENDPOINT,{
                data: LOGIN_USER
            }
            
        );
        return await response.json();
    }

    async getUserInformation(token, userID){
        const Authorization = `Bearer ${token}`;
        const response = await this.request.get(
            `${process.env.USER_ENDPOINT}/${userID}`,
            Const.getOptions(Authorization))
        
        return await response.json();
    }
}
export default Controler;