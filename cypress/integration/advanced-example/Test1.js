/// <reference types = "Cypress"/>

describe('My First suite', function()
{
   it('My First test case',function(){
       cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
       cy.get('.search-keyword').type('ca');
       cy.wait(2000);
       cy.get('.product:visible').should('have.length',4);
       
       //parent child chaining
       cy.get('.products').as('productLocator')
       cy.get('.products').find('.product').should('have.length',4);
       cy.get('.products').find('.product').eq('2').contains('ADD TO CART').click();
       cy.get('.products').find('.product').each(($e1,index,$list) => {
            const vegName=$e1.find('h4.product-name').text();
            if(vegName.includes('Cashews'))
            {
                $e1.find('button').click();
            }
       })
       cy.get('.brand').then(function(logoelement)
       {
           cy.log(logoelement.text())
       })
       //assert if logo is correctly displayed 
       cy.get('.brand').should('have.text', 'GREENKART')
       cy.get('.cart-icon > img').click()
       cy.contains('PROCEED TO CHECKOUT').click()
       cy.get(':nth-child(14)').click()
   })
})