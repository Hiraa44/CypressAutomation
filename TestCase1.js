/// <reference types="Cypress" />

describe('Login to the application', () => {
    beforeEach(() => {
        // root-level hook
        // runs once before all tests
      cy.visit("https://r2-iqa.renaissant.com")
      cy.wait(4000)
     cy.get('input[name="Email"]').type('tester1')
     cy.get('input[name="Password"]').type('ssi')
     cy.get('div[class="form-group"] button[role="button"]').click()
     cy.wait(10000)
     cy.get('img[alt="cross-country-healthcare-logo"]').should('be.visible')
    });
  
    it('Navigate to the trip Module', () => {
        // root-level hook
        // runs once before all tests
      cy.visit("https://r2-iqa.renaissant.com/LoadingDock/Trips")
      cy.wait(10000)
     // cy.get(".page-title").should('have.text', 'Trips/n')
     cy.url().should('eq', 'https://r2-iqa.renaissant.com/LoadingDock/Trips');
     console.log("Test Passed")
    //  cy.get("body > app-root:nth-child(1) > app-layout:nth-child(2) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > div:nth-child(1) > li:nth-child(1) > a:nth-child(1)"),click();
    });
  });