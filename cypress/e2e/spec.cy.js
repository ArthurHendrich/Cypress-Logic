/// <reference types="Cypress" />

describe("verify an test in saucemo", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
  });

  it("try to log in", () => {
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");

    // save method GET
    //cy.intercept("POST", "**/invetory*").as("getSession");   

    cy.get("#login-button").click();

    // verify if return status is 200
    // cy.wait('@getSession').then((xhr) => {
    //   expect(xhr.status).be.eq(200);
    // });
    
    // verify if is in page
    cy.get("#inventory_container").should("be.visible");
  });

  context.skip("If is logged in", () => {
    beforeEach(() => {
      cy.get("#user-name").type("standard_user");
      cy.get("#password").type("secret_sauce");
      cy.get("#login-button").click();

      // verify if is in page
      cy.get("#inventory_container").should("be.visible");
    });

    it("try to add a product to cart", () => {
      const productName = "Sauce Labs Backpack";

      // find the product and click on it
      cy.contains(productName);
      cy.get("#add-to-cart-sauce-labs-backpack").click();

      // verify if name Add to Cart change to Remove from Cart
      cy.get("#remove-sauce-labs-backpack").should("have.text", "Remove");

      // verify if product was added
      cy.get("#shopping_cart_container").should("be.visible");
      // or cy.get("#cart-status > a").should("have.text", "1");
    });
    
  });
});