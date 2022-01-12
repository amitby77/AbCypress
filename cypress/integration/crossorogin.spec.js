describe('verify the cross origin', () => {

    //     it('navigates both url', () => {
    //      cy.visit('https://apple.com')
    //         cy.visit('https://google.com') // this will error
    //       })

    beforeEach(()=>{
        cy.log('i am Before each testcase')  // 1
    })

    it('navigates Apple url', () => {
        cy.visit('https://apple.com')

    })

//this will run
    it('navigates Google url', () => {
        cy.visit('https://google.com')

    })

})

