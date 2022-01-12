describe('verify the radio button functionality',()=>{

    beforeEach(()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get("a[id='dropdown-checkboxes-radiobuttons']").scrollIntoView().invoke('removeAttr','target').click()
    
    })

it('verify the radio button functionality using click() method',()=>{

cy.get('input[value="orange"]').click()
cy.get('input[value="orange"]').should('be.checked')
cy.get('input[value="orange"]').nextAll().should('not.be.checked')
cy.get('input[value="orange"]').prevAll().should('not.be.checked')



})


it('verify the radio button functionality using check() with value method',()=>{

    cy.get('input[type="radio"]').check('purple')
    cy.get('input[value="purple"]').should('be.checked')
    cy.get('input[type="radio"]').check('orange')
    cy.get('input[value="purple"]').should('not.be.checked')
    
    
    
    
    })

})