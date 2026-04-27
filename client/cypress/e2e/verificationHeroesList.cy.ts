import LoginPage from "../pages/loginPage.ts";
import * as userData from "../fixtures/userData.json";
import HeroPage from "../pages/heroPage.ts";

const login = new LoginPage();
const hero = new HeroPage();


describe('pagina principal do cypress heroes ', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/heroes');

  })
  it('deve entrar e verificar se a lista de Heroes está presente e com no mínimo um herói', () => {
    login.loginSucess(userData.validUser.email, userData.validUser.password);
    hero.verificarHeroPage();
  })
})