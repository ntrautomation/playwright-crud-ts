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