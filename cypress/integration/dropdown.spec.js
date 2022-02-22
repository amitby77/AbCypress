
describe('Verify the Dropdown functionality',()=>{

    
    beforeEach(()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get("a[id='dropdown-checkboxes-radiobuttons']").scrollIntoView().invoke('removeAttr','target').click()
    
    })

    it('verify the dropdown menu',()=>{


        cy.get('#dropdowm-menu-1').select('c#').should('have.value','c#')
        cy.get('#dropdowm-menu-2').select('TestNG').should('have.value','testng')
        cy.get('#dropdowm-menu-3').select('javascript').should('have.value','javascript')


        
    })
})