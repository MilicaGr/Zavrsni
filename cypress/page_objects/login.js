export default class LoginPage {

    getInputField(id){
        return cy.get(`#${id}`);
    }

    get submitButton(){
        return cy.get('button[type="submit"]');
    }
    get gradebookSubitle(){
        return cy.get('h1')
    }

    login(email,password){
        this.getInputField('email').type(email);
        this.getInputField('userPassword').type(password);
        this.submitButton.click()
    }

}
export const loginPage = new LoginPage();