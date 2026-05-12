describe('Api Adopet', () => {
    
    it('Mensagens da API', () => {
        cy.request({
            method: 'GET' ,
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/6a64fbdb-dc26-45a9-b706-bfbdf15b505d',
            headers: Cypress.env()
        }).then((response) => {
            expect(response.status).to.be.equal(200)
            expect(response.body).is.not.empty
            expect(response.body).to.have.property('msg')        
        })
    })
})