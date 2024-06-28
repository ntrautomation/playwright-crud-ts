import Controler from '@e2e/backend/controler';
import {test, expect} from '@playwright/test';

test.describe('LOGIN VIA API', () => {
    let controler : Controler;

    test.beforeEach(async ({ page, request }) => {
        controler = new Controler(page, request);
        await controler.navigate();
        
    });

    test('MY', async ({ page}) => {
        const login = await controler.loginUser();
        console.log(login.token);
        console.log(login.expires);
        console.log(login.userId);
        console.log(login.username);
    
        await page.context().addCookies([
            { name : 'token', value: login.token, path: "/", domain: "demoqa"},
            { name: 'expires', value: login.expires, path: "/", domain: "demoqa"},
            { name: 'userID', value: login.userId, path: "/", domain: "demoqa"},
            { name: 'userName', value: login.username, path: "/", domain: "demoqa"}   

        ]);
        await  page.goto('https://demoqa.com/books')
        expect(1).toEqual(1)
    })
    
    
})
