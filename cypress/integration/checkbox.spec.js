describe('verify the checkboxes',()=>{

    beforeEach(()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get("a[id='dropdown-checkboxes-radiobuttons']").scrollIntoView().invoke('removeAttr','target').click()
    
    })


     

    it('validate the checkbox',()=>{

    
        //cy.get('@checkbox').click()

        // cy.get("input[value='option-1']").click()
        // cy.get("input[value='option-1']").should('be.checked')
        // cy.get("input[value='option-1']").click()
        // cy.get("input[value='option-1']").should('not.be.checked')

        cy.get("input[value='option-1']").check()
        cy.get("input[value='option-1']").should('be.checked')
        cy.get("input[value='option-1']").uncheck()
        cy.get("input[value='option-1']").should('not.be.checked')
    


    })


    it('verify the checkbox using check method using value',()=>{

        cy.get('input[type="checkbox"]').check('option-1')
        cy.get("input[value='option-1']").should('be.checked')
    })

    it.only('verify the multiple checkbox using check method using value',()=>{

        cy.get('input[type="checkbox"]').check(['option-1','option-2','option-3','option-4'])
        cy.get("input[value='option-1']").should('be.checked')
        cy.get("input[value='option-2']").should('be.checked')
        cy.get("input[value='option-3']").should('be.checked')
        cy.get("input[value='option-4']").should('be.checked')
    })


})