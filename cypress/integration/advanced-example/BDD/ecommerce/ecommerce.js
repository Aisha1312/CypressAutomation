/// <reference types = "Cypress"/>

import HomePage from '../../../../support/pageObjects/HomePage'
import ProductsPage from '../../../../support/pageObjects/ProductsPage'
import PurchasePage from '../../../../support/pageObjects/PurchasePage'
import CheckoutPage from '../../../../support/pageObjects/CheckoutPage'
import {Given,When,Then, And } from "cypress-cucumber-preprocessor/steps"

const homePage=new HomePage()
const productsPage = new ProductsPage()
const checkoutpage = new CheckoutPage()
const purchasePage = new PurchasePage()

//I open ecommerce page
Given('I open ecommerce page',()=>
{
    //cy.visit(Cypress.env('url')+'/angularpractice/')
    cy.visit("https://rahulshettyacademy.com/angularpractice/")
})


//I add items to cart
When('I add items to cart', function(){
    homePage.getShopTab().click()
    //iterating through array from json object
    this.data.productName.forEach(function(element)
    {
        cy.log(element)
        cy.selectProduct(element)
    })
    productsPage.getCheckoutButton().click()
})

//Validate total prices
And('Validate total prices', ()=>{
    var sum = 0
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
   
})

//select the country , submit and verify thankyou
Then('select the country , submit and verify thankyou',()=>{
    purchasePage.getLocationTextBox().type("Chennai")
    purchasePage.getTermsAndConditionsButton().click({force:true})
    purchasePage.getPurchaseButton().click()
    //purchasePage.getPurchaseAlert().should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
    purchasePage.getPurchaseAlert().then(function(element){
       const actualText = element.text()
       expect(actualText.includes("Success")).to.be.true
    })  
})

//When I fill the form details
When ('I fill the form details', function(dataTable){
    homePage.getEditBox().type(dataTable.rawTable[1][0])
    homePage.getGender().select(dataTable.rawTable[1][1])
  
})

//Then Validate the form behaviour
Then ('Validate the form behaviour' , function(){
    homePage.getTwoWayDataBinding().should('have.value',this.data.name)
    homePage.getEditBox().should('have.attr','minlength','2')
    homePage.getEntrepreneurButton().should('be.disabled')
})

And ('select the shop page', function(){
    homePage.getShopTab().click()
})