describe('Verify the API Request from Frontend', () => {

    beforeEach(() => {

        cy.visit('https://jsonplaceholder.typicode.com/')
    })


    it('Verify the Post request', () => {

        cy.intercept({

            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts'
        }).as('post')

        cy.get('a[href="/posts"]').last().click()
        cy.wait('@post').then(function ({ response }) {

            expect(response.body.length).to.equal(100)


        })

    })

    it('Mocking the response', () => {

        cy.intercept({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts'
        }, {

            body: [{

                "userId": 1,
                "id": 5,
                "title": "nesciunt quas odio",
                "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"

            }]
        }).as('post')

        cy.get('a[href="/posts"]').last().click()
        cy.wait('@post').then(function ({ request, response }) {

            expect(response.body.length).to.equal(1)



        })

    })


    //fixture type 1
    it.only('Mocking the response from fixture file A', () => {

        cy.intercept({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts'
        }, {

            fixture:'create.json'
            
        }).as('post')

        cy.get('a[href="/posts"]').last().click()
        cy.wait('@post').then(function ({ request, response }) {

            expect(response.body.length).to.equal(2)
            expect(response.body[0]).to.have.property('city')



        })

    })
    // fixture type 2

    it.only('Mocking the response from fixture file B', () => {

        cy.fixture('create').then((payload) => {


            cy.intercept({
                method: 'GET',
                url: 'https://jsonplaceholder.typicode.com/posts'
            }, {

                body:payload
            }).as('post')

            cy.get('a[href="/posts"]').last().click()
            cy.wait('@post').then(function ({ request, response }) {
                cy.log(response)
                expect(response.body.length).to.equal(2)
                expect(response.body[1]).to.have.property('message').include('spider-man')



            })


       })


   })

})