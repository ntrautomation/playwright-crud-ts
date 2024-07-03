import { APIRequestContext, BrowserContext, Page } from "@playwright/test";

class Initializer {
    page: Page
    request: APIRequestContext
    context : BrowserContext

    constructor(page, request?, context?){
        this.page = page;
        this.request = request;
        this.context = context;
    }
}
export default Initializer;