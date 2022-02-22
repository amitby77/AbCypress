describe('Hit the GO REST API using token',()=>{   // we need acces token

    it('verify the GET request',()=>{

        cy.request({

            method:'GET',
            url:'https://gorest.co.in/public/v2/users',
            headers:{
                Authorization : 'Bearer fb61f39e28251d3719fc9f1c1ecbcbd78fe5dcb1e9e8b0c24c54c38be034dceb'
            }
        }).then((response)=>{
            expect(response.status).to.equal(200)

        })

            
    })
})