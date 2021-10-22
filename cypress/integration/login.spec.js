///<reference types="Cypress" />
import { loginPage } from './../page_objects/login';
import {validEmail,validPassword} from './../fixtures/gradebook'

describe('login',()=>{
    beforeEach('visit page',()=>{
        cy.visit('https://gradebook.vivifyideas.com/login')
    })

    it('valid login',()=>{
        cy.intercept(
            "POST",
            "https://gradebook-api.vivifyideas.com/api/login"
        ).as("validLogin")
        loginPage.login(validEmail,validPassword)
        cy.wait('@validLogin').then((interception)=>{
            expect(interception.response.statusCode).eq(200);
            loginPage.gradebookSubitle.should('be.visible')
        })
    })
    
})