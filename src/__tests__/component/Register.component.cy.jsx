import { mount } from "@cypress/react18";
import Register from "../../views/Register.jsx";
import { BrowserRouter as Router } from "react-router-dom";

describe("Register Component", () => {
  beforeEach(() => {
    mount(
        <Router>
          <Register />
        </Router>
    );
  });

  it("should display the registration form", () => {
    cy.get("form").should("exist");
    cy.get('input[name="login"]').should("exist");
    cy.get('input[name="password"]').should("exist");
    cy.get('input[name="confirmPassword"]').should("exist");
    cy.get('button.btn').should("exist");
  });

  it("should have a link to the login page", () => {
    cy.get('a[href="/login"]').should("exist");
  });
});
