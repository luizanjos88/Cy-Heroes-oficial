import LoginPage from "../pages/loginPage.ts";
import * as userData from "../fixtures/userData.json";
const login = new LoginPage();


describe('pagina inicial cypress heroes Login Features', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/heroes');

  })
  it('deve fazer login com sucesso com email e senha validos', () => {
    login.loginSucess(userData.validUser.email, userData.validUser.password);

  })

  it('Não deve fazer login email e senha invalidos, e deve aparecer a mensagem de erro', () => {
    login.loginInvalidData(userData.invalidUser.email, userData.invalidUser.password);
    cy.get('.modal').should('contain', 'Invalid email or password');
  })

})