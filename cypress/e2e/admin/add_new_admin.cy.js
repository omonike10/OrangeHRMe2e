/// <reference types="Cypress" />
describe('Admin', () => {
    it('add participant to admin', () => {
        cy.login()
        cy.get("a[href='/web/index.php/admin/viewAdminModule']").click()
        cy.get("div[class='oxd-input-group oxd-input-field-bottom-space'] div input[class='oxd-input oxd-input--active']").type('Admin')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click().type('a{enter}')
        cy.get("input[placeholder='Type for hints...']").click()
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click().type('e{enter}')
        cy.get('.oxd-form-actions > .oxd-button--secondary').forceClick()
    });
    it('testing URL',() => {
cy.url().should('include','blank')
    })
});