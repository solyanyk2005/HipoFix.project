describe("Login Component", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("should display an error message on failed login", () => {
    cy.get('input[name="login"]').type("wronguser");
    cy.get('input[name="password"]').type("wrongpassword");
    cy.get('button.btn').click();

    cy.get(".alert").should("contain", "Invalid credentials"); // Adjust based on your error message
  });

  it("should navigate to home on successful login", () => {
    cy.get('input[name="login"]').type("Buy.2501@gmail.com");
    cy.get('input[name="password"]').type("Buy.2501");
    cy.get('button.btn').click();

    cy.url().should("include", "/home");
  });
});
