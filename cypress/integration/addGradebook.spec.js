///<reference types="Cypress" />
import{addGradebook} from './../page_objects/addGradebook'
import {loginPage} from './../page_objects/login'
import{gradebookName,validEmail,validPassword} from './../fixtures/gradebook'

describe('add gradeBook',()=>{
    beforeEach('visitPage',()=>{
        cy.visit('https://gradebook.vivifyideas.com/login');
        loginPage.login(validEmail,validPassword)
        cy.wait(3000)  
    })

    it('add gradebook',()=>{
        cy.intercept(
            "POST",
            "https://gradebook-api.vivifyideas.com/api/gradebooks/store"
        ).as("addGradebook")
        addGradebook.addGradebook(gradebookName)
        cy.wait('@addGradebook').then((interception)=>{
            expect(interception.response.statusCode).eq(201);
            addGradebook.gradebooksList.should('be.visible');
        })
    })


})