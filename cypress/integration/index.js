/// <reference types="Cypress" />

describe('Accessibility tests', () => {

    it('should send focus to a skip link when the route changes from a link click', () => {
        cy.visit('http://localhost:8000')

        cy.get('#page-navigation li:first-of-type a').click()

        cy.focused().should('have.class', 'routeSkipLink')
    })

    it('should have no automated accessibility violations', () => {
        cy.visit('http://localhost:8000')
        cy.injectAxe()
        cy.wait(100)
        cy.checkA11y()
    })
})