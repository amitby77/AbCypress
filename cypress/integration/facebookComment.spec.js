describe('Verify the facebook comment section',()=>{



    it('Verify that user is able to login using email id and password.',()=>{
        //const filepath = 'C:\Users\amitb\Desktop\AbCypress\cypress\fixtures\saibaba.jpg'



        cy.visit('https://www.facebook.com/')
        cy.title().should('include','Facebook')  // verified title
        cy.get('#email').type('nevaseanjali109@gmail.com')
        cy.get('#pass').type('Anjolina109')
        cy.get('[data-testid="royal_login_button"]').click({force:true}) // login successful
    
        //cy.get('.byvelhso > :nth-child(1) > :nth-child(1) > .oajrlxb2 > .a8c37x1j').click()
      cy.get('.a8c37x1j.ni8dbmo4.stjgntxs.l9j0dhe7.ltmttdrg.g0qnabr5').first().should('have.text','Anjolina') // user validation done
      cy.get('.p361ku9c').click() // go to home page

      //cy.get('.n1l5q3vz > :nth-child(2) > .bp9cbjyn').click()
      //cy.get('.datstx6m > .buofh1pr > :nth-child(1) > .s45kfl79 > .hu5pjgll').click()
      //cy.get('.datstx6m > .buofh1pr > :nth-child(1)').attachFile(filepath)
      //cy.get('.a8c37x1j.ni8dbmo4.stjgntxs.l9j0dhe7.ltmttdrg.g0qnabr5').last().click()  //click on post
      //cy.get('.a8c37x1j > .d2edcug0 > div').should('have.text','This post appears to be blank. Please write something or attach a link or photo to post.')


      cy.get('.a8c37x1j.ni8dbmo4.stjgntxs.l9j0dhe7')
      //.eq(18).type('good evening')
      cy.get('.a8c37x1j.ni8dbmo4.stjgntxs.l9j0dhe7').contains("What's on your mind, Anjolina?").click()
      cy.get('._1mf._1mj').type('Good Evening Amit')
      cy.get('div[class="rq0escxv l9j0dhe7 du4w35lb d2edcug0 hpfvmrgz bp9cbjyn j83agx80 pfnyh3mw j5wkysh0 hytbnt81"]').last().click({force:true})
        //cy.get('.datstx6m > .buofh1pr > :nth-child(1)').click()


    })
})