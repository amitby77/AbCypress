describe('test cypress',()=>{


    it('testing test cases',()=>{
        let cost = 1000
        cy.visit('https://meesho.com/');
        cy.title().should('eq', 'Meesho Online Shopping-Lowest Prices,Great Quality.') // to validate title of page
        cy.get('input[type="text"]').type('boy shoes').type('{enter}')
        
    })
})