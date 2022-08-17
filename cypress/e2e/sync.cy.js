/// <reference types="cypress" />

describe("Wait...", () => {
  before(() => {
    cy.visit("https://wcaquino.me/cypress/componentes.html");
  });

  beforeEach(() => {
    cy.reload();
  });

  it("Must wait element be avaiable", () => {
    cy.get("#novoCampo").should("not.exist");
    cy.get("#buttonDelay").click();
    cy.get("#novoCampo").should("not.exist");
    cy.get("#novoCampo").should("exist");
    cy.get("#novoCampo").type("funciona");
  });

  it("Should do retrys", () => {
    cy.get("#buttonDelay").click();
    cy.get("#novoCampo")
      // .should('not.exist')
      .should("exist")
      .type("funciona");
  });

  it("Find", () => {
    cy.get("#buttonList").click();
    cy.get("#lista li").find("span").should("contain", "Item 1");

    cy.get("#lista li span").should("contain", "Item 2");
  });

  it("Timeout", () => {
    // cy.get('#buttonDelay').click()
    // cy.get('novoCampo', { timeout: 1000 }).should('exist')

    // cy.get('#buttonListDOM').click()
    // cy.wait(5000)
    // cy.get('#lista li span')
    // .should('contain', 'Item 2')

    cy.get("#buttonListDOM").click();
    cy.get("#lista li span").should("have.length", 1);
    cy.get("#lista li span").should("have.length", 2);          
  });

  it('Click Retry', () => {
    cy.get('#buttonCount')
        .click() 
        .should('have.value', '1')
  })

  it.only('Should vs Then', () => {
    cy.get("#buttonListDOM").click();
    // cy.get("#lista li span").debug()
    cy.get("#lista li span").then($el => {
        // .should('have.lenght', 1)
        // console.log($el)
        expect($el).tho.have.lenght(1)
        // return 2
        // cy.get('#buttonList')
    }).and('eq', 2)
        .and('not.have.id', 'buttonListDOM')

    // should fica executado ao longo da espera, ignora oq está dentro do return, faz retentativas
    // then só faz o teste quando o elemento estiver disponivel, para novas buscas
  })
});
