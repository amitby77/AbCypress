describe('Verify the checkout functionality',()=>{

    it('validate the add to cart functionality',()=>{
        cy.visit('/')   // on testrunner mobile website will be open
        cy.get('.hamburger-icon > .icon-nav').click()
        cy.wait(3000)
       
        cy.get('.site-nav > :nth-child(2)').click()
        cy.wait(2000)
        
        cy.get(':nth-child(2) > .sub-menu-mobile > .site-nav-dropdown > :nth-child(3) > a > span').click()
        cy.wait(2000)
        cy.url().should('have.contain','seasonal')
        cy.get('.product-collection').children().should('have.length',12)


    })
})