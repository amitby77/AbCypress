describe('validate the response for comment in fb',()=>{

    it('Verify the API response when we comment in FB',()=>{


        cy.visit('https://www.facebook.com/')
        cy.title().should('include','Facebook')  // verified title
        cy.get('#email').type('nevaseanjali109@gmail.com')
        cy.get('#pass').type('Anjolina109')
        cy.get('[data-testid="royal_login_button"]').click({force:true}) 


// cy.intercept({

//     Method: 'Post'  // for commenting in fb comment section
//     url:

cy.get('p[class="hcukyx3x oygrvhab cxmmr5t8 kvgmc6g5"]').last().type('Happy Birthday Anjolina').trigger()



})



})