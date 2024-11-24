import { mount } from "@cypress/react18";
import Help from "../../views/Help";

describe("Help Component", () => {
  beforeEach(() => {
    mount(<Help />);
  });

  it("should display the Help & Support title", () => {
    cy.get(".title").should("contain", "Help & Support");
  });

  it("should display the FAQ section", () => {
    cy.get(".subtitle").first().should("contain", "Frequently Asked Questions");
    cy.get("ul").within(() => {
      cy.get("li").should("have.length", 3);
      cy.get("li").eq(0).should("contain", "How do I create an account?");
      cy.get("li").eq(1).should("contain", "How do I reset my password?");
      cy.get("li")
        .eq(2)
        .should("contain", "Who can I contact for further support?");
    });
  });

  it("should display the Contact Us section", () => {
    cy.get(".subtitle").last().should("contain", "Contact Us");
    cy.get('a[href="mailto:support@example.com"]').should(
      "contain",
      "support@example.com"
    );
  });

  it("should display the correct messages", () => {
    cy.get(".message")
      .first()
      .should(
        "contain",
        "If you have any questions or need assistance, please refer to the following resources:"
      );
    cy.get(".message")
      .last()
      .should(
        "contain",
        "For any additional questions or concerns, feel free to reach out to us via email at"
      );
  });
});
