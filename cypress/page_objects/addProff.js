export default class AddProfessor {

    get addProfButton(){
        return cy.get('a[href="/professors/create"]')
    }
    getInputField(id){
        return cy.get(`#${id}`)
    }

    get addImageButton(){
        return cy.get('button[type="button"]').eq(2);
    }
    get submitButton(){
        return cy.get('button[type="button"]').eq(3);
    }
    get allProfessorsTitle(){
        return cy.get('h1');
    }
    
    addProff(name,lastName,url){
        this.addProfButton.click();
        cy.url().should("contain", "/professors")
        this.getInputField('input-default').type(name);
        this.getInputField('input-default1').type(lastName);
        this.addImageButton.click();
        this.getInputField('__BVID__45').type(url);
        this.submitButton.click();

    }
}
export const addProfessor = new AddProfessor();