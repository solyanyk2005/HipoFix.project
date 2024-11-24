// FILE: src/views/About.test.jsx
/// <reference types="cypress" />

import { mount } from "@cypress/react18";
import About from "../../views/About";

describe("About Component", () => {
  beforeEach(() => {
    mount(<About />);
  });

  it("should render the About component", () => {
    cy.get(".about-container").should("exist");
  });

  it("should display the title", () => {
    cy.get(".title").should("contain.text", "About Us");
  });

  it("should display the first message", () => {
    cy.get(".message")
      .eq(0)
      .should(
        "contain.text",
        "We are committed to delivering high-quality products and services that empower our users."
      );
  });

  it("should display the second message", () => {
    cy.get(".message")
      .eq(1)
      .should(
        "contain.text",
        "Our mission is to make a positive impact, and we continuously strive to improve and innovate."
      );
  });
});
