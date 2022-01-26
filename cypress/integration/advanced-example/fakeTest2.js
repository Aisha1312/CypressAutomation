/// <reference types = "Cypress"/>
describe('My first suite', function()
{
    //Handling child windows alert
   it('My First API test case', function(){
        
    cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
    cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
    (req)=>{
        req.url = "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=Aisha"
        req.continue((res) => 
        {
            expect(res.statusCode).to.equal(404)
        })
    }).as("dummyUrl")

    cy.get('button.btn.btn-primary').click()
    cy.wait('@dummyUrl')
    
   })   

})