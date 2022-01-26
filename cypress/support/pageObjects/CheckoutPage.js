class CheckoutPage
{
    getCheckoutButtonOnCheckoutPage()
    {
        return cy.get('button.btn.btn-success')
    }
}
export default CheckoutPage;