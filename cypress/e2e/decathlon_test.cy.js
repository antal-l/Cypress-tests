/// <reference types="cypress" />

it('decathlon_e2e_test', () => {

    cy.visit('https://www.decathlon.hu/')

    cy.wait(1000)


    cy.get('#didomi-notice-agree-button').click()

    cy.get('input.svelte-1yis1by').type('kerékpár{enter}')

    cy.wait(1000)

    cy.get('[href="/sportok/kerekparozas/orszaguti-kerekpar"] > span').click()

    cy.wait(1000)

    cy.get('[href="/sportok/kerekparozas/verseny-orszaguti-kerekpar"] > span').click()

    cy.wait(1000)

    cy.get('[data-supermodelid="305449"] > .vtmn-w-full.vtmn-flex-col.vtmn-items-center > .dpb-models > .vtmn-relative > .vtmn-absolute > .svelte-11itto').click()

    

})