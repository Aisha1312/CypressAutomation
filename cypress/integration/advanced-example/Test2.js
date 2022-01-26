/// <reference types = "Cypress"/>

describe('My First suite', function()
{
   it('My First test case',function(){
       cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
       //cy.get('#checkBoxOption1').check().should('be.checked')
       cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
       cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
       cy.get('input[type="checkbox"]').check(['option2','option3'])

   })
   it('My Second test case',function(){
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('select').select('option2').should('have.value','option2')
   })


   it('My third test case for hide/show element',function(){
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()
    cy.get('#displayed-text').should('be.visible')
   })

   it('My fourth test case for radio button element',function(){
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('[value="radio2"]').check().should('be.checked')
   })


})
