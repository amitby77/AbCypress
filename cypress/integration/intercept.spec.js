describe('Get Comment Concept using Intercept',()=>{
    beforeEach(()=>{

        cy.visit('https://example.cypress.io/commands/network-requests')
    })

    it('Verify The Get Comment button',()=>{

        cy.intercept({

            method: 'GET',
            url:'https://jsonplaceholder.cypress.io/comments/1'
        }).as('getComment')

        cy.contains('Get Comment').click()
        cy.wait('@getComment').then(({response})=>{

           return response.body.body
        }).then((str)=>{
            cy.get('.network-comment').should('have.text',str)

        })

        
    })
})