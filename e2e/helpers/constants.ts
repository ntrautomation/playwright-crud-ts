/* eslint-disable-next-line @typescript-eslint/no-var-requires*/
const { faker } = require(`@faker-js/faker`);

/**
 * FAKER DOCUMENTATION -> https://fakerjs.dev/api/
 */

export const TEST_USER: IRandomUser = {
    userName: faker.internet.userName(),
    password: faker.internet.password(
        {
            length: 15, 
            memorable: false, 
            /* eslint-disable-next-line no-useless-escape*/
            pattern: /^[a-zA-Z0-9!@#$&()\\-`.+,/\"]*$/,
            prefix: "9$"
        })
}

class Constants {
    authOptions(Authorization: string){
        const options = {
                headers: {
                    Authorization,
                }
        };
        return options;
    }

    bookOptions(Authorization: string, userID, isbn){
        const options = {
            data: {
                userId: userID, 
                collectionOfIsbns: [{
                    isbn : isbn
                }]
            },
            headers: {
                Authorization,
            }
        }
        return options;
    }

    updateBookOptions(Authorization: string, userID, isbnNew){
        const options = {
            data: {
                userId: userID, 
                isbn: isbnNew
            },
            headers: {
                Authorization,
            }
        }
        return options;
    }

    deleteBookOptions(Authorization: string, userID, isbn){
        const options = {
            data: { 
                isbn: isbn,
                userId: userID
            },
            headers: {
                Authorization,
            }
        }
        return options;
    }
}
export const Const = new Constants();