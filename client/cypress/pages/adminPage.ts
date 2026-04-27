class AdminPage {

    selectorList() {

        const selectors = {
            newHeroeButton: '[href="/heroes/new"]',
            nameInput: '[data-cy="nameInput"]',
            priceInput: '[data-cy="priceInput"]',
            fansInput: '[data-cy="fansInput"]',
            savesInput: '[data-cy="savesInput"]',
            powerSelect: '[data-cy="powersSelect"]',
            submitButton: 'button',
            trashButton: '[data-cy="trash"]',
            confirmButton: 'button'

        }
        return selectors


    }

    newHeroe() {
        cy.get(this.selectorList().newHeroeButton).should('have.text', 'Create New Hero').should('be.visible');
        cy.get(this.selectorList().newHeroeButton).click();
        cy.get(this.selectorList().nameInput).type('Luiz');
        cy.get(this.selectorList().priceInput).type('35');
        cy.get(this.selectorList().fansInput).type('99');
        cy.get(this.selectorList().savesInput).type('152');
        cy.get(this.selectorList().powerSelect).select('1')
        cy.get(this.selectorList().submitButton).eq(2).click();
    }
    deleteHeroe() {
        cy.get(this.selectorList().trashButton).eq(7).click();
        cy.get(this.selectorList().confirmButton).eq(34).click();
    }

}

export default AdminPage;
