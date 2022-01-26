/// <reference types = "Cypress"/>

describe('My Second suite', function()
{
    //Handling windows alert
   it('My First test case',function(){
       cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
       cy.get('#alertbtn').click();
       cy.get('[value="Confirm"]').click();
       cy.on('window:alert',(str)=>
       {
          //Mocha
           expect(str).to.equal("Hello , share this practice page and share your knowledge")
       })

       cy.on('window:confirm',(str)=>
       {
          //Mocha
           expect(str).to.equal("Hello , Are you sure you want to confirm?")
       })
       
   })

   it('My second test case',function(){
    cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
    cy.get('#opentab').invoke('removeAttr','target').click()
    
    })

    it('My third test case',function(){
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.url().should('include','rahulshettyacademy')
        cy.go('back')
      })
})