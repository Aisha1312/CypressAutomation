/// <reference types = "Cypress"/>
describe('My first suite', function()
{
    //Handling child windows alert
   it('My First API test case', function(){
        
    cy.request('POST','http://216.10.245.166/Library/Addbook.php', {
        
        "name":"Learn Appium Automation with Java",
        "isbn":"bcd",
        "aisle":"227",
        "author":"John foe"
        }).then(function(response)
    {
        expect(response.body).to.have.property("Msg","successfully added")
        expect(response.body).to.eq(200)
    })
    
   })   

})