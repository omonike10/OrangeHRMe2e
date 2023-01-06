describe('Add user', function () {
  beforeEach(function () {
    cy.visit('/')
    cy.fixture('login_fixture').then(function (data) {
      this.data = data
    })
  })
  it('login and time', function () {
    cy.get('input[placeholder="Username"]').type(this.data.Username)
    cy.get('input[placeholder="Password"]').type(this.data.Password)
    cy.get('button[type="submit"]').click()
    cy.get('i[class="oxd-icon bi-stopwatch"]').click()
    cy.get('.oxd-icon.bi-calendar.oxd-date-input-icon').click()
    cy.get('.oxd-icon.bi-clock.oxd-time-input--clock').click()
    cy.get('.oxd-time-hour-input > .oxd-input')
      .clear()
      .type('0')
    cy.get('.oxd-time-minute-input > .bi-chevron-down')
      .click()
      .click()
     .click()
     cy.get('input[value="AM"]').click()
    cy.get('.oxd-textarea').type('Time_data')
    cy.get('.oxd-button').click()

  });
  
 
});