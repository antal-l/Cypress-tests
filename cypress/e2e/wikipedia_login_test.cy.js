/// <reference types="cypress" />

it('wikipedia login and logout test', () => {

    cy.visit('https://hu.wikipedia.org/wiki/Kezd%C5%91lap')

    cy.get('#pt-login-2 > a > span').click()

    cy.get('#wpName1').type('Antaltesztelo')
    cy.get('#wpPassword1').type('Tesztelo01')

    cy.get('#wpLoginAttempt').click()

    cy.wait(2000)

    cy.get('#vector-user-links-dropdown-checkbox').click()

    cy.wait(2000)

    cy.get('#pt-logout > a > :nth-child(2)').click()

       

   

})