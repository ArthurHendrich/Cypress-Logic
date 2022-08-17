// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress.Commands.add("createOng", () => {
//     cy.request({
//         method: 'POST',
//         url: 'http://localhost:3000/ongs',
//         body: {
//             name: "Dogs queridos",
//             email: "dogs@mail.com",
//             whatsapp: "9999999999",
//             city: "Porto Alegre",
//             uf: "URS"
//         }
//     }).then(response => {
//         expect(response.body.id).is.not.null;
//         cy.log(response.body.id); // verificar se trouxe o request

//         // cria variavel ambiente temporaria que serve pro teste
//         Cypress.env('createdOngId', response.body.id);
//     })
// })

Cypress.SelectorPlayground.defaults({
    selectorPriority: ['id', 'class', 'attributes', 'data-cy', 'data-test', 'data-testid', 'tag', 'nth-child']
})

Cypress.Commands.add('clickAlert', (locator, message) => {
    cy.get(locator).click()
    cy.on('window:alert', msg => {
        expect(msg).to.equal(message)
    })
})