/// <reference types = "Cypress"/>

describe('My Second suite', function()
{
    //Handling windows alert
   it('My First test case',function(){
       cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
       cy.get('tr td:nth-child(2)').each(($el,index,$list)=>{
            var a = $el.text()
            if(a.includes('Python')){
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
                    const priceTag = price.text()
                    expect(priceTag).to.equal('25')
                
            })
       }    
       
   })
})
})