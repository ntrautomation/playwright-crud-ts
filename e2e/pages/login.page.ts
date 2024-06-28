import Initializer from "@e2e/api/initializer";

class LoginPage extends Initializer{
    constructor(page, request, context){
        super(page, request, context)
    }

    private readonly userLabel = this.page.locator(`label#userName-value`);

    async getUserLabelText(){
        return await this.userLabel.textContent();
    }

}
export default LoginPage;