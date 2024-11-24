import { mount } from "@cypress/react18";
import Login from "../../views/Login.jsx";
import { BrowserRouter as Router } from "react-router-dom";

describe("Login Component", () => {
//   const mockContextValue = {
//     users: [],
//     setUser: cy.stub(),
//     setToken: cy.stub(),
//   };

  beforeEach(() => {
    mount(
        <Router>
          <Login />
        </Router>
    );
  });

  it("should display the login form", () => {
    cy.get("form").should("exist");
    cy.get('input[name="login"]').should("exist");
    cy.get('input[name="password"]').should("exist");
    cy.get('button.btn').should("exist");
  });

  it("should have a link to the registration page", () => {
    cy.get('a[href="/register"]').should("exist");
  });
});
