/// <reference types="cypress" />

describe("Iframes", () => {
  it("Deve preencher campo de texto", () => {
    cy.visit("https://wcaquino.me/cypress/componentes.html");

    cy.get("#frame1").then((iframe) => {
      const body = iframe.contents().find("body");
      cy.wrap(body)
        .find("#tfield")
        .type("Texto do iframe")
        .should("have.value", "Texto do iframe");
    });
  });

  it("Deve testar frame diretamente", () => {
    cy.visit("https://wcaquino.me/cypress/frame.html");
    
    cy.on("window:alert", (msg) => {
      expect(msg).to.be.equal("Click OK!");
    });

    cy.get("#otherButton").click(); 
  });
});
