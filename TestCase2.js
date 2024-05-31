

describe('Login to the application', () => {
    beforeEach(() => {
      cy.login(Cypress.env('tester1'), Cypress.env('ssi'))
        // root-level hook
        // runs once before all tests
    //  cy.visit("https://r2-iqa.renaissant.com")
      cy.wait(4000)
    // cy.get('input[name="Email"]').type('tester1')
   //  cy.get('input[name="Password"]').type('ssi')
   //  cy.get('div[class="form-group"] button[role="button"]').click()
     cy.wait(10000)
     cy.get('img[alt="cross-country-healthcare-logo"]').should('be.visible')
    });
  
    it('Navigate to the Load Module', () => {
      
      
     cy.wait(10000)
     cy.visit("https://r2-iqa.renaissant.com/LoadingDock/Loads")
     cy.url().should('eq', 'https://r2-iqa.renaissant.com/LoadingDock/Loads');
     cy.wait(4000)
     cy.get('[href="/LoadingDock/Loads/Add"] > .btn-primary').should('be.visible').click({force:true}); 
     cy.get("input[name='Number']").type("ET01")
     cy.get("#igx-icon-40").click();
    
    })
    

    
  });