describe('Verify the Action Class Funtionality', () => {

    beforeEach(() => {
        cy.visit('http://www.webdriveruniversity.com/')

        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click()
    })

    it('Verify the Scroll into View Functionality', () => {

        // cy.visit('http://www.webdriveruniversity.com/')

        // cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click()
        cy.url().should('include', 'Actions')   // include use for substring
    })

    it.only('Verify the Drag and Drop Functionality', () => {
        cy.get('#draggable').trigger('mousedown',{button:1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force:true})
        cy.get('#droppable > p').then((el)=>{

            expect(el).to.have.css('background-color', 'rgb(244, 89, 80)')
        
        })
        cy.get('#droppable > p > b').should('have.text','Dropped!')


    })


    
    it('Verify Jquery the Drag and Drop Functionality', () => {
        cy.get('#draggable').trigger('mousedown',{which:1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force:true})
        cy.get('#droppable').find('p').find('b').should('have.text','Dropped!')
        

    })

    it('Verify the Double click functionality',()=>{

        cy.get('#double-click').dblclick()
        cy.get('#double-click').should('have.class','div-double-click double')
        cy.get('#double-click').should('have.attr','class','div-double-click double')
    })

})