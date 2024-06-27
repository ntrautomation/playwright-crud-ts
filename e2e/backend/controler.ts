import Initializer from "@e2e/api/initializer";

class Controler extends Initializer{

    constructor(page, request){
        super(page, request)
    }

    async createUser(){
        const response = await this.request.post(
            process.env.USER_ENDPOINT, {
                data : {
                    userName: "Automati_123",
                    password: "123Automation$3"
                }
            }
        );
        return await response.json()
    }
}
export default Controler;