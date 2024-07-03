import Controler from '@e2e/backend/controler';
import LoginPage from '@e2e/pages/login.page';
import {test, expect} from '@playwright/test';

test.describe('LOGIN VIA API', () => {
    let controler : Controler;
    let loginPage : LoginPage

    test.beforeEach(async ({ page, request, context}) => {
        controler = new Controler(page, request, context);
        loginPage = new LoginPage(page); 
    });

    test.afterEach(async ({ context }) => {
        await context.clearCookies();
    });

    test('LOGIN USER WITH COOKIES', async ({ page }) => {
        await controler.loginUser();
        await  page.goto(process.env.BOOKS);
        expect(await loginPage.getUserLabelText()).toEqual(process.env.USER_NAME)
    })
    
    
})
