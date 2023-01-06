describe('Add user', function () {
    beforeEach(function () {
      cy.visit('/')
      cy.fixture('login_fixture').then(function (data) {
        this.data = data
      })
    })
    it('my personal information',function(){
        cy.get('input[placeholder="Username"]').type(this.data.Username)
        cy.get('input[placeholder="Password"]').type(this.data.Password)
        cy.get('button[type="submit"]').click()
        cy.get('.oxd-userdropdown-name').click()
      cy.get("a[role='menuitem'][href='/web/index.php/help/support']").click()
      cy.get("a[href='/web/index.php/pim/viewMyDetails']").click()
      cy.get('.oxd-input.oxd-input--active.orangehrm-firstname').clear().type('Akin')
      cy.get('.oxd-input.oxd-input--active.orangehrm-middlename').clear().type('Omo')
      cy.get('.oxd-input.oxd-input--active.orangehrm-lastname').clear().type('Akinn') 
     //cy.get(':nth-child(1) > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Omogodoti')
     cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('0012')
     cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('LN12345678')
     cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear().type('2023-11-25')
     cy.get(':nth-child(3) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('11113')
     cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
      cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()
    })
})