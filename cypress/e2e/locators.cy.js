/// <reference types="cypress" />

describe('Find or Get Elements by Using Different Locators', () => {
    beforeEach(() => {
        // run before each test case, beforeMethod in TestNG
        cy.clearCookies();
        cy.visit('/login');
    })
   
    it('Check different locators strategies', () => {
       // By CSS locator
       cy.get("input[name='username']").type("CydeoStudent"); // every statement creates an object to be interacted, and next command makes operation to the object created at the previous statement
       // attribute name and value
       cy.get("[type='text']").clear();  // clear what is typed

       cy.get("input").each((item, index, list) => {
        // assert the length of the list is 2
        expect(list).to.have.length(2);
        expect(item).to.have.attr("type");
       })
       //by atribute
    cy.get('[type]');

    //by class name
    cy.get('.btn.btn-primary');

    //by ID
    cy.get('#wooden_spoon');

    // if I want to use text: no xpath in cypress, but it still possible with a different approach
    cy.get('button').should('contain','Login').click();
    })
    it('Check finding elements by traveling throuth DOM',() => {
       // travel to find the login button: locate username box- go to parent form -then find button
        cy.get('input[name="username"]').parents('form').find('button').should('contain','Login').click();
    })

    it.only('Check Different type of Assertions', () =>{
        // cypress itself usees assertions provieded by Chai, Sinon and jQuery libraries
        //Shoud Assertion: does the assertion directly on the objects itself
        cy.get('#wooden_spoon')
        .should('contain','Login')
        .and('have.class','btn btn-primary');

        //expect Assertion: explicit, creates a subject of our test, the u implement different actions
        cy.get('#wooden_spoon')
        .then((buttonElement)=> {
            expect(buttonElement).to.have.text('Login');
            expect(buttonElement).to.have.class('btn btn-primary')
        })

    })
    
})