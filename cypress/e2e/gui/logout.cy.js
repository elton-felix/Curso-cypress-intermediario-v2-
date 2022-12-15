describe('Logout', () => {
    beforeEach(() => {
      cy.login()
     cy.visit('/')//visitando a home page(retirando esse comando ainda funciona)
    })
  
    it('successfully', () => {
      cy.logout()
  
      cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`)//verificando se a URL atual é igual a baseURL do cypress config e demais diretorios
    })
  })
  