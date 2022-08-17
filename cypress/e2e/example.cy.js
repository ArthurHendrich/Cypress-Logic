/// <reference types="Cypress" />

describe("Ongs", () => {
  it.skip("devem poder realizar um cadastro", () => {
    // cy.visit - abre a página
    cy.visit("http://localhost:3000/register");
    // cy.get - busca um elemento pelo id
    // type - insere um texto
    cy.get("[data-cy=name").type("Dogs queridos");
    cy.get("[data-cy=email").type("dogs@mail.com");
    cy.get("[data-cy=whatsapp").type("9999999999");
    cy.get("[data-cy=city").type("Porto Alegre");
    cy.get("[data-cy=uf").type("URS");

    // routing - onde a aplicação está se conectado com http & criação de MOX
    // start serer com cy.server()
    // criar uma rota com cy.route()
    // atribuir a rota com um alias
    // esperar com cy.wait e fazer validação

    cy.server();
    cy.route('POST', '**/ongs').as('postOng');

    cy.get("data-cy=submit").click();

    cy.wait('@postOng').then((xhr) => {
        expect(xhr.status).be.eq(200);
        expect(xhr.response.body).has.property('id');
        expect(xhr.response.body.id).is.not.null;
    })
  });

  it("deve poder realizar um login no sistema", () => {

    // requisição de criar usuario deve ser executada antes de qualquer teste
    const createdOngId = Cypress.env('createdOngId');

    // cy.log(createdOngId)

    cy.visit("http://localhost:3000/");
    cy.get('input').type(createdOngId);
    cy.get('button').click();
    });
});
