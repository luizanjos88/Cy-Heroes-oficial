import LoginPage from "../pages/loginPage.ts";
import * as userData from "../fixtures/userData.json";
const login = new LoginPage();


describe('pagina inicial cypress heroes Login Features', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/heroes');

  })
  it('deve fazer login como admin e criar um personagem heroe com sucesso, e excluí-lo logo após', () => {
    login.loginSucess(userData.adminUser.email, userData.adminUser.password);
    cy.get('[href="/heroes/new"]').click();
    cy.get('[data-cy="nameInput"]').type('Luiza');
    cy.get('[data-cy="priceInput"]').type('35');
    cy.get('[data-cy="fansInput"]').type('99');
    cy.get('[data-cy="savesInput"]').type('152');
    cy.get('[data-cy="powersSelect"]').select('1')
    cy.get('button').eq(2).click();
    cy.get('[data-cy="trash"]').eq(7).click();
    cy.get('button').eq(34).click();

  })
})