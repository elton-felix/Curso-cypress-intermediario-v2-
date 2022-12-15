const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost',//url da aplicação que será testada
    env: {
      hideCredentials: true, //não deixa o accessToken nos testes ser vazado
      requestMode: true, // dr feaback visual quando usamos o cy.request
    },
    experimentalRunAllSpecs: true, //funcionalidade deixa testar todos os testes em modo iterativo(mesmo em specs separadas)
  },
  fixturesFolder: false,//dizendo ao cypress que não utilizaresmos as fixtures
  video: false,//tirando o registro de videio automatico
})
