import { APIRequestContext, Page, request } from "@playwright/test";

class Initializer {
    page: Page
    request: APIRequestContext

    constructor(page, request){
        this.page = page;
        this.request = request;
        this.init();
    }

    async init(){
        this.request = await request.newContext({
            baseURL: process.env.BASE_URL
        });
    }
    async navigate() {
        console.log(process.env.BASE_URL);
        await this.page.goto(process.env.BASE_URL)
    }

}
export default Initializer;