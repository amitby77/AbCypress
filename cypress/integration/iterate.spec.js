describe('Iterate over the element',()=>{


        it.only('validate title of skin care products',()=>{
            cy.visit('https://automationteststore.com/')
            cy.get('#categorymenu > nav > ul > li:nth-child(4) > a').click({force:true})
            cy.get('.mt10').find('a').each(function(el,index){
                let expectedArray = ["Eyes","Face","Gift Ideas & Sets","Hands & Nails","Sun"]
               // expect(expectedArray.indexOf(el.text())).to.be.greaterThan(-1)   
                cy.wrap(el).should('contains.text',expectedArray[index])
            })
    })



    it('Search mobiles on flipkart which have cost upto 10000 rs', () => {
        let cost = 10000
        cy.visit("https://www.flipkart.com/")
        cy.get('input[type="text"]').type('mobiles').type('{enter}')
        cy.wait(3000)
        cy.get('select[class="_2YxCDZ"]').last().select(String(cost))
        cy.wait(3000)
        cy.get('._30jeq3._1_WHN1').each((el) => {
            cy.wrap(Number(el.text().replace(/₹|,/gi, ""))).should('be.lte', cost)
        })
    })

})
