import { faker } from '@faker-js/faker' //faker é uma biblioteca que gera dados aleatorios

const options = {  env : {  snapshotOnly : true  }  }; // da feadback visual das chamadas a API 

describe('Create Project', options,() => {
  beforeEach(() => {
    cy.api_deleteProjects()
    cy.login()
  })

  it('successfully', () => {
    const project = {
      name: `project-${faker.datatype.uuid()}`,//utilizando faker para gerar um id aleatorio
      description: faker.random.words(5)//gerando 5 palavras aleatorias
    }

    cy.gui_createProject(project)

    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project.name}`)
    cy.contains(project.name).should('be.visible')
    cy.contains(project.description).should('be.visible')
  })
})
