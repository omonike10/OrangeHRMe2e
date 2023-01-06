/// <reference types="Cypress" />
describe('Admin', () => {
    it('delete participant from admin', () => {
        cy.login()
        cy.get(':nth-child(1) > .oxd-main-menu-item').forceClick()
        cy.get(':nth-child(29) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').forceClick()
        cy.get(':nth-child(29) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(1)').forceClick()
        //cy.pause()
        cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click()
    });
});