describe('hidden password', () => {
  
    it('hidden password on the text log', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[placeholder="Username"]').type('Admin')
        cy.get('input[placeholder="Password"]').type('admin123',{sensitive:true})
       cy.get('button[type="submit"]').click()
        
    });
});