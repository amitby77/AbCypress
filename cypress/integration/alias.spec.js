describe('verify the alias functionality',()=>{


    it('check alias',()=>{

        cy.visit('http://www.webdriveruniversity.com/Login-Portal/index.html')
        cy.get("input[placeholder='Username']").as('username')
        cy.get("input[placeholder='Password']").as('password')
        cy.get('@username').type('amitbyale@gmail.com')
        cy.get('@password').type('amit12345')
        cy.get("button[type='submit']").as('submit')
        cy.get('@submit').click()   

        cy.on('window:alert',(str)=>{
        expect(str).to.equal('validation failed')

    })


    })
})

