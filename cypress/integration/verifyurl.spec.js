describe('Verify the URL of DOM element',()=>{


    it('verify the URL',()=>{

const nav=['Home','Online Banking','eedback']
        cy.visit('http://zero.webappsecurity.com/')
        cy.get('#pages-nav > li > div > strong').each((el,index)=>{

          cy.wrap(el).should('contains.text',nav[index])

        })
        
    })
})