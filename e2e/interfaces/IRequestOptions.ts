/**
 * @interface for request option for controller
 */

/* eslint-disable-next-line @typescript-eslint/no-unused-vars*/
interface IRequestOptions {
        headers?: {
            Authorization: string,
        },
        data?: {
            userName?,
            password?,
            userId?,
            isbn?,
            collectionOfIsbns?
        }
}