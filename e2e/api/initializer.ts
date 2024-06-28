import { APIRequestContext, BrowserContext, Page, request } from "@playwright/test";

class Initializer {
    page: Page
    request: APIRequestContext
    context : BrowserContext

    constructor(page, request, context){
        this.page = page;
        this.request = request;
        this.context = context;
        this.init();
    }

    async init(){
        this.request = await request.newContext({
            baseURL: process.env.BASE_URL
        });
    }
    async navigate() {
        await this.page.goto(process.env.BASE_URL)
    }

}
export default Initializer;