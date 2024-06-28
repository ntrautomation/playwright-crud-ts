import Controler from '@e2e/backend/controler';
import {test, expect} from '@playwright/test'

test.describe('CRUD API FLOW', () => {
    let controler : Controler
    
    test.beforeEach(async ({ page, request }) => {
        controler = new Controler(page, request);
        await controler.navigate();
    })

    test('LOGIN', async () => {
        const user = await controler.createUser();
        console.log(await user.userID);
        console.log(await user.username);

        const token = await controler.getAuthorizationToken();
        console.log(token.token);
        expect(test.info().errors.length).toBeLessThan(1);
    })  
})
