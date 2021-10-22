export default class AddGradebook {

   get addGradebookButton(){
    return cy.get('a[href="/gradebook/create"]')
    }
    get nameInputField(){
        return cy.get('input[id="name"]')
    }
    get professorInputData(){
        return cy.get('select')
    }
   
    get submitButton(){
        return cy.get('button[type="button"]').eq(1);
    }
    get gradebooksList(){
        return cy.get('h1');
    }
    addGradebook(name){
        this.addGradebookButton.click();
        this.nameInputField.type(name);
        this.professorInputData.select('MilicaSelektovana2 Grubacic');
        this.submitButton.click();
    }

}
export const addGradebook = new AddGradebook