/// <reference types="Cypress" />
describe("Accessibility checks", () => {
    beforeEach(() => {
    })
    it("Has no detectable a11y violations on load", () => {
      cy.visit("http://localhost:8000")
      cy.injectAxe()
      cy.wait(500)
      cy.checkA11y()
    })
    it("Handles focus on route change via click", () => {
      cy.visit("http://localhost:8000")
      cy.focused()
        .should("not.have.class", "routeSkipLink")

      cy.get('#page-navigation').find('a').eq(0).click()

      cy.focused()
        .should("have.class", "routeSkipLink")
    })
})