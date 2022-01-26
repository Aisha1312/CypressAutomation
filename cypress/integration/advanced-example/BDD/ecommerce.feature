Feature: End to end ecommerce validation

@Regression
Scenario: Ecommerce products delivery
Given I open ecommerce page
When I add items to cart
And Validate total prices
Then select the country , submit and verify thankyou

@Smoke
Scenario: Filling the form
Given I open ecommerce page
When I fill the form details
    |name  |gender|
    |Aisha |Male  |
Then Validate the form behaviour
And select the shop page

