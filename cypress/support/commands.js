// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
 Cypress.Commands.add('login', (email, password) => {   
      cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[placeholder="Username"]').type('Admin')
        cy.get('input[placeholder="Password"]').type('admin123')
       cy.get('button[type="submit"]').click() })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//

Cypress.Commands.add('forceClick', {prevSubject: 'element'}, (subject, options) => {
  cy.wrap(subject).click({force: true})
});

// -- This will overwrite an existing command --
 Cypress.Commands.overwrite('type', (originalFn, element, text, options) => { 
if(options && options.sensitive){
  options.log = false

  Cypress.log({
    $el: element,
    name: 'type',
    message: '*'.repeat(text.length)
  })
}
return originalFn(element,text,options)
 })