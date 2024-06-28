import Controler from '@e2e/backend/controler';
import {test, expect} from '@playwright/test'

test.describe('CRUD API FLOW', () => {
    let controler : Controler
    
    test.beforeEach(async ({ page, request }) => {
        controler = new Controler(page, request);
        await controler.navigate();
    })

    test('LOGIN', async () => {
        const user = await controler.createUser()
        const token = await controler.getAuthorizationToken();
        const userInfo = await controler.getUserInformation(token.token, user.userID);

        expect(await user.userID).toEqual(await userInfo.userId)
        expect(await user.username).toEqual(await userInfo.username);

        
    })  
})
