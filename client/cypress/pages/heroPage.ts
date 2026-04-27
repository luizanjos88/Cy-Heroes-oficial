class HeroPage {
    selectorList() {
        const selectors = {
            heroList: '.flex-wrap',
            heroCard: '[data-cy="hero-card"]'
        }
        return selectors;
    }

    verificarHeroPage() {
        cy.get(this.selectorList().heroList).should('be.visible');
        cy.get(this.selectorList().heroCard).eq(0).should('be.visible');
        cy.get(this.selectorList().heroCard).should('have.length.greaterThan', 0);

    }
}

export default HeroPage