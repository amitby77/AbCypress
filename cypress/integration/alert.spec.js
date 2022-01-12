describe('Verify the alrt in cypress',()=>{

    beforeEach(()=>{      //if same code use at starting on each test case then we can reduce it.

        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr',"target").click()
    })

    it('verify the normal alert',()=>{     //normal alert
        // cy.visit('http://www.webdriveruniversity.com/')
        // cy.get('#popup-alerts').invoke('removeAttr',"target").click()
        cy.get('#button1').click()
        cy.on('window:alert',(str)=>{

            expect(str).to.equal('I am an alert box!')
        })

    })


    it('Verify the Confirm ok button',()=>{

        // cy.visit('http://www.webdriveruniversity.com/')
        // cy.get('#popup-alerts').invoke('removeAttr',"target").click()
        // cy.get('#button4').click()
        // cy.on('window:confirm',(str)=>{
        //     expect(str).to.equal('Press a button!')
        //     return true  // means clicked on ok

        // })
        // cy.get('#confirm-alert-text').should('have.text','You pressed OK!')

        cy.alertConfirm('#button4','Press a button!',true,'You pressed OK!')
    })



    it('Verify the Confirm cancel button',()=>{

        // cy.visit('http://www.webdriveruniversity.com/')
        // cy.get('#popup-alerts').invoke('removeAttr',"target").click()
        // cy.get('#button4').click()
        // cy.on('window:confirm',(str)=>{
        //     expect(str).to.equal('Press a button!')
        //     return false   // means clicked on cancel

        // })
        // cy.get('#confirm-alert-text').should('have.text','You pressed Cancel!')
        cy.alertConfirm('#button4','Press a button!',false,'You pressed Cancel!')

    })


    it.only('verify the popup',()=>{
        cy.get('#button2').click()
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('It’s that Easy!!  Well I think it is.....')
            //expect(str).should('have.class','modal-title')
        })
    })
}) 