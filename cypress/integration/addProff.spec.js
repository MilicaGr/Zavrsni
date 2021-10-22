///<reference types="Cypress" />
import { addProfessor } from './../page_objects/addProff';
import { loginPage } from './../page_objects/login'
import { validEmail, validPassword, professorName, professorLastName, url } from './../fixtures/gradebook'

describe('add profesor', () => {

    beforeEach('visit page', () => {
        cy.visit('https://gradebook.vivifyideas.com/login')
        it('valid login', () => {
            cy.intercept(
                "POST",
                "https://gradebook-api.vivifyideas.com/api/login"
            ).as("validLogin")
            loginPage.login(validEmail, validPassword)
            cy.wait('@validLogin').then((interception) => {
                expect(interception.response.statusCode).eq(200);
                loginPage.gradebookSubitle.should('be.visible')
            })
        })
    });

    

it('add professor', () => {
    loginPage.login(validEmail, validPassword)
    cy.intercept(
        "POST",
        "https://gradebook-api.vivifyideas.com/api/professors/create"
    ).as("addProf")
        cy.url().should("contain", "/gradebooks");
    addProfessor.addProff(professorName, professorLastName, url)
    cy.wait('@addProf').then((interception) => {
        expect(interception.response.statusCode).eq(200);
        addProfessor.allProfessorsTitle.should('be.visible');
        })
    })
    
})
