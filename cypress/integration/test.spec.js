describe('Verify the Environmental',()=>{

    it('verify the production URL',()=>{    ///"baseUrl":"https://app.recast.studio/"   

        cy.visit('/')

    })

    it('verify the Login URL',()=>{

        cy.visit('/auth/login/')

    
    })

    it('verify the signup URL',()=>{

        cy.visit('/auth/register/')
    })


    // it('verify the URL using cypress command',()=>{

    //     let url= Cypress.config().baseUrl;
    //     cy.visit(url);
    // })


    it('verify the url and element',()=>{
        let url= Cypress.config().baseUrl

        cy.visit(url)
        cy.get('.lnXdpd').should('have.attr','width',272)
    })



    it('verify the Another URL',()=>{

        let url2= Cypress.config().baseUrl
        cy.visit(url2)
    })


    it.only('diff url',()=>{

        let url3= Cypress.config().baseUrl
        cy.visit(url3)

    })
})