// cypress/integration/login.spec.js

describe('Bejelentkezési teszt', () => {
    it('Rossz jelszóval történő bejelentkezés', () => {
      cy.visit('https://hu.wikipedia.org/wiki/Kezd%C5%91lap')
  
      cy.get('#pt-login-2 > a > span').click()

    cy.get('#wpName1').type('Antaltesztelo')
    cy.get('#wpPassword1').type('Tesztelo011')

    cy.get('#wpLoginAttempt').click()

    cy.wait(2000)
  
      
      cy.contains('jelszó érvénytelen').should('be.visible')
    })
  })
  