describe('My First Cypress Test', function() {
    it('Visits the Gappify QAS instance', function() {
    //VLogin to Gappify
    cy.visit('/login');
    cy.get(':nth-child(1) > .input-group > .form-control').clear();
    cy.get(':nth-child(1) > .input-group > .form-control').type('qaglteam');
    cy.get(':nth-child(2) > .input-group > .form-control').clear();
    cy.get(':nth-child(2) > .input-group > .form-control').type('KSu2Rv9AcePXz9j');
    cy.get('.btn').click();

    
    cy.get('#new_nav > li:nth-child(3) > a').click();
  })
  })