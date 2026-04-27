import LoginPage from "../pages/loginPage.ts";
import * as userData from "../fixtures/userData.json";
const login = new LoginPage();


describe('Controle de Permissão', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/heroes');

    })
    it('o usuário comum não pode visualizar o botão Criar Novo Herói', () => {
        login.loginSucess(userData.validUser.email, userData.validUser.password);
        cy.get('[href="/heroes/new"]').should('not.exist');
    })

    it('o admin deve visualizar o botão Criar Novo Herói', () => {
        login.loginSucess(userData.adminUser.email, userData.adminUser.password);
        cy.get('[href="/heroes/new"]').should('be.visible').should('have.text', 'Create New Hero');
    })

})