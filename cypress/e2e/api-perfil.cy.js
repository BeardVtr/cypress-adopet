describe('Api Perfil', () => {
    const authorization = Cypress.env('authorization')

    it('Perfil da API', () => {
        cy.request({
            method: 'GET' ,
            url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/6a64fbdb-dc26-45a9-b706-bfbdf15b505d',
            headers: { authorization }
        }).then((res) => {
                expect(res.status).to.be.equal(200)
                expect(res.body).is.not.empty
                expect(res.body).to.have.property('perfil')
                expect(res.body.perfil.nome).to.be.equal('vito fernandes')
        })
    })
})