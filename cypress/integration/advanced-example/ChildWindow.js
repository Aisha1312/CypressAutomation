/// <reference types = "Cypress"/>

describe('My first suite', function()
{
    //Handling child windows alert
   it('My First test case',function() {
       
       cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
       cy.get('#opentab').then(function(el)
      {
          const linkToBeLoaded = el.prop('href')
          cy.visit(linkToBeLoaded)
          cy.log(linkToBeLoaded)
        })
   })

})