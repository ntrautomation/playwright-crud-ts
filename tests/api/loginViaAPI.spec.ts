import Controler from '@e2e/backend/controler';
import LoginPage from '@e2e/pages/login.page';
import {test, expect} from '@playwright/test';

test.describe('LOGIN VIA API', () => {
    let controler : Controler;
    let loginPage : LoginPage

    test.beforeEach(async ({ page, request , context}) => {
        controler = new Controler(page, request, context);
        loginPage = new LoginPage(page, request, context);
        await controler.navigate();
        
    });

    test('MY', async ({ page, context}) => {
        await controler.loginUser();
        //page = await context.newPage()
        await  page.goto('https://demoqa.com/books')
        expect(await loginPage.getUserLabelText()).toEqual(process.env.USER_NAME)
    })
    
    
})
