/// <reference types="cypress" />

it('google search', () => {

    cy.visit('https://www.google.com/')

    cy.get('#W0wltc > .QS5gu').click()

    cy.get('#APjFqb').type('James Webb{enter}')

    cy.wait(1500)
    
    
    cy.contains('hu.wikipedia.org').click()

    cy.wait(4000)
    
    


    
    
    

   

    
    
})