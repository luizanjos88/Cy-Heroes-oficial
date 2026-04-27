import LoginPage from "../pages/loginPage.ts";
import * as userData from "../fixtures/userData.json";
import AdminPage from "../pages/adminPage.ts";

const login = new LoginPage();
const admin = new AdminPage();


describe('pagina inicial cypress heroes Login Features', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/heroes');

  })
  it('deve fazer login como admin e criar um personagem heroe com sucesso, e excluí-lo logo após', () => {
    login.loginSucess(userData.adminUser.email, userData.adminUser.password);
    cy.get('[href="/heroes/new"]').should('have.text', 'Create New Hero').should('be.visible');
    admin.newHeroe();
    admin.deleteHeroe();

  })
})

