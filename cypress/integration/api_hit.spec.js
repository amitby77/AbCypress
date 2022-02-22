describe('test API request', () => {

    it('Post request Hit', () => {

        cy.fixture('payload').then((obj) => {   // to get payload from fixure

            cy.request({
                method: 'POST',
                url: 'https://reqres.in/api/users',
                body: (obj),
                Headers: {
                    'Content-Type': 'application/json'
                }
            })


        }).then((response) => {

            expect(response.status).to.eqls(201)   // verify the status
            expect(response.duration).to.be.lessThan(2200)
            expect(Number(response.body.id)).to.eqls(777)
        })

    })


    it('PUT request hit', () => {

        cy.request({
            method: 'PUT',
            url:'https://reqres.in/api/users?page=2',


        }).then((response)=>{

            expect(response.status).to.eqls(200)
        })



    })
})