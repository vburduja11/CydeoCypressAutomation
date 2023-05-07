/// <reference types="cypress" />

describe('Context: My First Tests', () => {


    beforeEach(() => {
        // run before each test case, beforeMethod in TestNG
        cy.clearCookies();
        cy.visit('/multiple_buttons')
    })
    it('check different buttons actions', () =>{
        //select a button with text

        cy.contains('Button 2').should('be.visible').click();
        cy.contains('Clicked on button two!').should('be.visible');
    })

})