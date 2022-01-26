/// <reference types = "Cypress"/>
import HomePage from '../../support/pageObjects/HomePage'
import ProductsPage from '../../support/pageObjects/ProductsPage'
import PurchasePage from '../../support/pageObjects/PurchasePage'
import CheckoutPage from '../../support/pageObjects/CheckoutPage'

describe('My first suite', function()
{
     before(function(){
        cy.fixture('example.json').then(function(data){
            this.data = data
        })
    })
    it('My First test case',function(){
        const homePage=new HomePage()
        const productsPage = new ProductsPage()
        const checkoutpage = new CheckoutPage()
        const purchasePage = new PurchasePage()
        cy.visit(Cypress.env('url')+'/angularpractice/')
        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value',this.data.name)
        homePage.getEditBox().should('have.attr','minlength','2')
        homePage.getEntrepreneurButton().should('be.disabled')
        homePage.getShopTab().click()
        //cy.selectProduct('Blackberry')
        //cy.selectProduct('NokiaEdge')

        //iterating through array from json object
        this.data.productName.forEach(function(element)
        {
            cy.log(element)
            cy.selectProduct(element)
        })
        
        var sum = 0
        productsPage.getCheckoutButton().click()
        cy.get('tr td:nth-child(4) strong').each(($el,index,$list) => {
            cy.log($el)
            
            const actualText = $el.text()
            var res = actualText.split(" ")
            res = res[1].trim()
            sum = Number(sum) + Number(res)
            cy.log(res)
        }).then(function()
        {
            cy.log(sum)
        })

        cy.get('h3 strong').then(function(element)
        {
            const totAmount = element.text()
            var totRes = totAmount.split(" ")
            var total = totRes[1].trim()
            expect(Number(sum)).to.equal(Number(total))
        })
        
        checkoutpage.getCheckoutButtonOnCheckoutPage().click()
        purchasePage.getLocationTextBox().type("Chennai")
        purchasePage.getTermsAndConditionsButton().click({force:true}
            
            )
        purchasePage.getPurchaseButton().click()
        //purchasePage.getPurchaseAlert().should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
        purchasePage.getPurchaseAlert().then(function(element){

            const actualText = element.text()
           expect(actualText.includes("Success")).to.be.true
        } 
        )

        });


    })
