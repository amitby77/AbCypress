// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// to verify alert confirm
Cypress.Commands.add('alertConfirm', (locator, string,flag,strx) => {
    cy.get(locator).click()
        cy.on('window:confirm',(str)=>{
            expect(str).to.equal(string)
            return flag   // means clicked on cancel

        })
        cy.get('#confirm-alert-text').should('have.text',strx)
    })


     import 'cypress-file-upload';

     // to handle iframe

     Cypress.Commands.add('getIframe', (iframe) => {
        return cy.get(iframe)
            .its('0.contentDocument.body') // to find iframe document
            .should('be.visible')
            .then(cy.wrap);
    })
