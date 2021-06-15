describe('Navigation', () => {
    it('should have a list events link that navigates to the list events view', () => {
      // navigate to the homepage
      cy.visit('https://techweek.phtechcommunity.org/');
      // check that the "Register for Free" link is there
      expect(cy.get(':nth-child(4) > .nav-link > span')).to.exist;
      // click on the "Sign in" link
      cy.get('.ml-lg-auto > .nav-link').click();
    });
  });