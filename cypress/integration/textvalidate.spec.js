describe('Validate text',()=>{


    it('Verify the Child text',()=>{

  cy.visit('file:///C:/Users/amitb/Desktop/AbCypress/cypress/integration/index.html')

  cy.get('#tree > span').should('have.text','this is the test')
    })
})