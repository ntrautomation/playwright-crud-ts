import Initializer from "@e2e/api/initializer";
import { DEMO_COOKIE } from "@e2e/enums/cookies";
import { Const, TEST_USER } from "@e2e/helpers/constants";
class Controler extends Initializer{

    constructor(page, request, context){
        super(page, request, context)
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
            Const.authOptions(Authorization))
        
        return await response.json();
    }

    async deleteUser(token, userID){
        const Authorization = `Bearer ${token}`;
        const response = await this.request.delete(
            `${process.env.USER_ENDPOINT}/${userID}`,
            Const.authOptions(Authorization)
        )
        return await response;
    }

    async addBookToUser(token, userID, isbn){
        const Authorization = `Bearer ${token}`;
        const response = await this.request.post(
            process.env.BOOKS_ENDPOINT,
            Const.bookOptions(Authorization, userID, isbn)
        )
        return await response.json();
    }

    async updateUserBook(token, userID, isbn, isbnNew){
        const Authorization = `Bearer ${token}`;
        const response = await this.request.put(
            `${process.env.BOOKS_ENDPOINT}/${isbn}`,
            Const.updateBookOptions(Authorization, userID, isbnNew)
        )
        return await response.json()
    }
    
    async deleteUserBook(token, userID, isbn){
        const Authorization = `Bearer ${token}`;
        const response = await this.request.delete(
            process.env.BOOK_ENDPOINT,
            Const.deleteBookOptions(Authorization, userID, isbn)
        )
        return response;
    }

    async loginUser(){
        const response = await this.request.post(
            process.env.LOGIN_ENDPOINT,
            Const.loginUserOptions(),
        )
        const res = await response.json()
        await this.getCookies(res)
        return response.json()
    }
    

    async getCookies(res){
        const demo_cookies: ICookie[] = [
            {name: DEMO_COOKIE.EXPIRES, 
                value: res.expires, url : process.env.BASE_URL},
            {name: DEMO_COOKIE.TOKEN, 
                value: res.token, url : process.env.BASE_URL},
            {name: DEMO_COOKIE.USER_ID, 
                value: res.userId, url : process.env.BASE_URL},
            { name: DEMO_COOKIE.USER_NAME, 
                value: res.username, url : process.env.BASE_URL} 
        ]

        await this.context.addCookies(demo_cookies);
    }
}
export default Controler;