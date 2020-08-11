/// <reference types="Cypress" />

describe("Accessibility tests in dark mode", () => {
  beforeEach(() => {
    cy.visit("/")
      .get(".test-entry")
      .findByTitle(/Activate/)
      .click();
    cy.injectAxe();
  });
  it("Has no detectable accessibility violations on load", () => {
    cy.checkA11y();
  });
  it("Navigates to /blog and checks for accessibility violations", () => {
    cy.findByLabelText(/View blog page/)
      .click()
      .checkA11y();
  });
  it("Navigates to /first-post and checks for accessibility violations", () => {
    cy.findByLabelText(/View blog page/).click();
    cy.findByText(/First Post/i)
      .click()
      .checkA11y(null, {
        rules: {
          "color-contrast": { enabled: false },
        },
      });
  });
  it("Navigates to /projects and checks for accessibility violations", () => {
    cy.findByLabelText(/View projects page/)
      .click()
      .checkA11y();
  });
  it("Navigates to /contact and checks for accessibility violations", () => {
    cy.findByLabelText(/View contact page/)
      .click()
      .checkA11y();
  });
});

describe("Accessibility tests in light mode", () => {
  beforeEach(() => {
    cy.visit("/").get(".test-entry");
    cy.injectAxe();
  });
  it("Has no detectable accessibility violations on load", () => {
    cy.checkA11y();
  });
  it("Navigates to /blog and checks for accessibility violations", () => {
    cy.findByLabelText(/View blog page/)
      .click()
      .checkA11y();
  });
  it("Navigates to /first-post and checks for accessibility violations", () => {
    cy.findByLabelText(/View blog page/).click();
    cy.findByText(/First Post/i)
      .click()
      .checkA11y(null, {
        rules: {
          "color-contrast": { enabled: false },
        },
      });
  });
  it("Navigates to /projects and checks for accessibility violations", () => {
    cy.findByLabelText(/View projects page/)
      .click()
      .checkA11y();
  });
  it("Navigates to /contact and checks for accessibility violations", () => {
    cy.findByLabelText(/View contact page/)
      .click()
      .checkA11y();
  });
});
