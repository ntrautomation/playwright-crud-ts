import Initializer from "@e2e/api/initializer";
import { TEST_USER } from "@e2e/helpers/constants";

class Controler extends Initializer{

    constructor(page, request){
        super(page, request)
    }

    async createUser(){
        const response = await this.request.post(
            process.env.USER_ENDPOINT, {
                data : TEST_USER
            }
        );
        return await response.json()
    }
}
export default Controler;