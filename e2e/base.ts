import { APIRequestContext, request } from "@playwright/test";

class Base {

    request: APIRequestContext;

    constructor(request){
        this.request = request;
    }

    async init(){
        this.request = await request.newContext({
            baseURL: process.env.BASE_URL
        })
    }

}
export default Base;