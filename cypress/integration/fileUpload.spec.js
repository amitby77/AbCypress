describe('Upload File in Cypress testcases',()=>{

it('upload a basic file',()=>{

    cy.visit('http://www.webdriveruniversity.com/File-Upload/index.html')

    const fixturePath = 'sai.jpg'
    cy.get("input[type='file']").attachFile(fixturePath)
    cy.get('#submit-button').click()
    cy.on('window:alert',(str)=>{

        expect(str).to.equal('Your file has now been uploaded!')
    })

})




})