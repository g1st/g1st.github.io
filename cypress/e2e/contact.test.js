/// <reference types="Cypress" />

describe("Test contact form", () => {
  before(() => {
    cy.visit("/")
      .get(".test-entry")
      .findByLabelText(/View contact page/)
      .click();
  });
  it("Will throw an error when submitting empty form", () => {
    cy.findByText("Send Message").click();
    cy.findByText("Email is required.").should("exist");
    cy.findByText("Message is required.").should("exist");
  });
  it("Can fill the form", () => {
    cy.get('input[name="email"]')
      .type("test@email.com")
      .should("have.value", "test@email.com");
    cy.get('textarea[name="message"]')
      .type("My message")
      .should("have.value", "My message");
  });
  it("Will throw an error when submitting form with message of less than 20 characters", () => {
    cy.findByText("Send Message").click();
    cy.findByText("Message should have at least 20 characters.").should(
      "exist"
    );
  });
  it("Will send an email with correctly filled in form", () => {
    cy.findByPlaceholderText("Message")
      .click()
      .clear()
      .type("My very very long message.")
      .should("have.value", "My very very long message.");

    cy.get("form").submit();
    cy.get("form").should("not.exist");
    cy.contains("Thank you for reaching out!");
  });
});
