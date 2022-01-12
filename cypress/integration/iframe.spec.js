describe('Verify the Iframe with cypress code',()=>{

it('Verify the iframe',()=>{

    cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')

     cy.get('#frame').within(function($iframe){
        const iframeContent = $iframe.contents().find('body')
        cy.wrap(iframeContent).find('#button-find-out-more').should('have.text','Find Out More!')

     })

    // cy.getIframe('#frame').find('#button-find-out-more').should('have.text','Find Out More!')
    // cy.getIframe('#frame').find('.section-title').eq(3).should('have.text','Excellent Customer Service!')
})


})
 

// utility in cypress

// Cypress.Commands.add('getIframe', (iframe) => {
//     return cy.get(iframe)
//         .its('0.contentDocument.body') // to find iframe document
//         .should('be.visible')
//         .then(cy.wrap);
// })