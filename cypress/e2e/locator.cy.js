/// <reference types="cypress" /> 

describe('Work with basic elements', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('Jquery Selector', () => {
        cy.get(':nth-child(1) > :nth-child(3) > [type="button"]')
        // cy.get("#tableUsuarios td:contains('Doutorado'):eq(0) ~ td:eq(3) > input") 
    })

    it('using xpath', () => {
        cy.xpath('//input')
        cy.xpath('//input[contains(@onclick, "Francisco")]')
        cy.xpath('//table[@id="tabelaUsuarios"]//td[contains(., "Doutorado")][2]/..//input[@type="text"]')
        cy.xpath('//td[contains(., "Usuario A")]/following-sibling::td[contains(.,"Mestrado")]/..//input[@type="text"]').type('Hendrich')
    })
})  