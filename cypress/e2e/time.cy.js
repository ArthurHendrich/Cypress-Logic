/// <reference types="cypress" /> 

describe('Work with Time', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    it('Going back to the past', () => {
        // cy.get('#buttonNow').click()
        // cy.get('#resultado > span').should('contain', '17/08/2022')
        
        const dt = new Date(2012, 3, 10, 15, 23, 50)
        cy.clock(dt.getTime())
        cy.get('#buttonNow').click()
        cy.get('#resultado > span').should('contain', '10/04/2012')
    })

    it.only('Goes to the future', () => {
        const dt = new Date(2022, 8, 17, 15, 23, 50)  
  
        // cy.get('#buttonTimePassed').click()
        // cy.get('#resultado > span').invoke('text') // transforma em texto
        //     .should('gt', 1663439030000) // maior que

        cy.clock()
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').invoke('text').should('lte', 0)

        // cy.wait(5000) // nao funciona
        // cy.get('#buttonTimePassed').click()
        // cy.get('#resultado > span').invoke('text').should('lte', 5000)
        
        cy.tick(5000) // passa o tempo
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').invoke('text').should('gte', 5000)
    })
})