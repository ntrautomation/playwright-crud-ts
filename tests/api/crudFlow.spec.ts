import Controler from '@e2e/backend/controler';
import { Iterator } from '@e2e/helpers/iterators';
import {test, expect} from '@playwright/test';
import { books } from '../../e2e/data/books.json';

const bookList: string[] = [];

test.describe('CRUD API FLOW', () => {
    let controler : Controler
   
    test.beforeEach(async ({ page, request , context}) => {
        controler = new Controler(page, request, context);
        await controler.navigate();
        Iterator.iterateOverJson(bookList, books)
    })

    test('CRUD USER FLOW', async () => {
        const user = await controler.createUser()
        const token = await controler.getAuthorizationToken();
        let userInfo = await controler.getUserInformation(token.token, user.userID);
        
        expect(await user.userID).toEqual(await userInfo.userId)
        expect(await user.username).toEqual(await userInfo.username);

        const deleteUser = await controler.deleteUser(token.token, user.userID);
        expect(deleteUser.status()).toEqual(204)

        userInfo = await controler.getUserInformation(token.token, user.userID);
        expect(userInfo.message).toEqual('User not found!')
    }) ;

    test('CRUD USER FLOW WITH ADDING AND REMOVING BOOKS', async () => {
        const user = await controler.createUser()
        const token = await controler.getAuthorizationToken();
        let userInfo = await controler.getUserInformation(token.token, user.userID);
        
        expect(await user.userID).toEqual(await userInfo.userId)
        expect(await user.username).toEqual(await userInfo.username);

        const addBooks = await controler.addBookToUser(token.token, user.userID, bookList[0])
        expect(addBooks.books[0].isbn).toEqual(bookList[0])

        const updateBooks = await controler.updateUserBook(token.token, user.userID, bookList[0], bookList[2]);
        expect(await updateBooks.userId).toEqual(await user.userID);
        expect(await updateBooks.username).toEqual(await user.username);
        expect(await updateBooks.books[0].isbn).toEqual(await bookList[2])

        const deleteBooks = await controler.deleteUserBook(token.token, user.userID, bookList[2]);
        expect(deleteBooks.status()).toEqual(204)

        const deleteUser = await controler.deleteUser(token.token, user.userID);
        expect(deleteUser.status()).toEqual(204)

        userInfo = await controler.getUserInformation(token.token, user.userID);
        expect(userInfo.message).toEqual('User not found!')
    });
    
})
