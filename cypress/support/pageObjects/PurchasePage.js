class PurchasePage
{
    getPurchaseButton()
    {
        return cy.get('a.nav-link.btn.btn-primary')
    }
    getLocationTextBox()
    {
        return cy.get('#country')
    }
    getTermsAndConditionsButton()
    {
        return cy.get('#checkbox2')
    }
    getPurchaseButton()
    {
        return cy.get('input[value="Purchase"]')
    }
    
    getPurchaseAlert()
    {
        return cy.get('.alert')
    }
}

export default PurchasePage;