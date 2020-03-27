/// <reference types="Cypress" />

describe("Accessibility tests", () => {
  beforeEach(() => {
    cy.visit("/")
      .get("main")
      .injectAxe();
  });
  it("Has no detectable accessibility violations on load", () => {
    cy.checkA11y();
  });
  it("Navigates to /blog and checks for accessibility violations", () => {
    cy.findByText(/blog/i)
      .click({ force: true }) // text is visible only on hover
      .checkA11y();
  });
  it("Navigates to /first-post and checks for accessibility violations", () => {
    cy.findByLabelText(/View blog page/).click();
    cy.findByText(/First Post/i)
      .click()
      .checkA11y();
  });
});
