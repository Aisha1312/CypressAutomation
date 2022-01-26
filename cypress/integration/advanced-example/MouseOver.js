/// <reference types = "Cypress"/>

describe('My first suite', function()
{
    //Handling windows alert
   it('My First test case',function(){
       cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
       cy.get('.mouse-hover-content').invoke('show')
       cy.contains('Top').click()
       cy.url().should('include', 'top')
   })

})