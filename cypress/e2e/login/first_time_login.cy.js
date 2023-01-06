describe('login', function(){
    beforeEach(function()  {
        cy.fixture('login_fixture').then(function(data){
            this.data=data
        })
    });
    it('input the username and password', function() {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[placeholder="Username"]').type(this.data.Username)
        cy.get('input[placeholder="Password"]').type(this.data.Password)
       cy.get('button[type="submit"]').click()
    });
    
});