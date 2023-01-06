describe('Invalid credentials', () => {
  
    it('input the invalid username and invalid password', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[placeholder="Username"]').type('12345abc')
        cy.get('input[placeholder="Password"]').type('56789def')
       cy.get('button[type="submit"]').click()
       cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should('have.text','Invalid credentials') 
    });
});