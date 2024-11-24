import React from 'react';

describe("Register Component", () => {

  beforeEach(() => {
    cy.visit('/register');
  });

  it("should display an error message if any field is empty", () => {
    cy.get('input[name="login"]').type("newuser");
    cy.get('input[name="password"]').type("password123");
    cy.get('input[name="confirmPassword"]').clear();
    cy.get('button.btn').click();

    cy.get(".alert").should("contain", "There is something wrong");
  });

  it("should navigate to home on successful registration", () => {
    cy.get('input[name="login"]').type("newUser");
    cy.get('input[name="password"]').type("pass3312");
    cy.get('input[name="confirmPassword"]').type("pass3312");
    cy.get("button.btn").click();

    cy.url().should("include", "/home");
  });
});
