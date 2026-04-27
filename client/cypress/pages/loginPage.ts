class LoginPage {
    selectorList() {
        const selectors = {
            arrayButton: 'button',
            inputEmail: '[data-cy="email"]',
            inputPassword: '[data-cy="password"]',
            logoutButton: 'li > .undefined',
        }
        return selectors;
    }

    loginSucess(email: string, password: string) {
        cy.get(this.selectorList().arrayButton).eq(0).click();
        cy.get(this.selectorList().inputEmail).type(email);
        cy.get(this.selectorList().inputPassword).type(password);
        cy.get(this.selectorList().arrayButton).eq(15).click();
        cy.get(this.selectorList().logoutButton).should('have.text', 'Logout').should('be.visible');
    }
    loginInvalidData(email: string, password: string) {
        cy.get(this.selectorList().arrayButton).eq(0).click();
        cy.get(this.selectorList().inputEmail).type(email);
        cy.get(this.selectorList().inputPassword).type(password);
        cy.get(this.selectorList().arrayButton).eq(15).click();
    }

}

export default LoginPage;
