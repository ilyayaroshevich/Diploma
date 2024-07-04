@all
Feature: 21 century website
Background:
  Given I am on the main page
  Given I accepte Cookies
  @1
  Scenario Outline: As a user, I want to login with incorrect credentials
    When I click on the accountButton on the header page
    Then I should see profile on the header page
    When I click on the loginButton on the header page
    Then I should see loginPopup on the login page
    When I enter <email> and <password>
    When I click on the loginButton on the login page
    Then I check that <error> is correct
Examples:
    | email        | password  | error               |
    | test@test.com| test12345 |Неправильный пароль. |
@2
Scenario: As a user, I want to navigate to promo page
    When I click on the allActionsButton on the header page
    Then I check that I am on the promo page
@3
Scenario: As a user, I want to navigate to electronics page
    When I click on the goodCatalogButton on the header page
    Then I should see goodCatalog on the main page
    When I click on the electronicsButton on the main page
    Then I check that I am on the electronics page
@4
Scenario Outline: As a user, I want to navigate to searched good page
  When I click on the searchField on the header page
  When I enter <nameOfGood> in the search field
  Then I should see searchResult on the main page
  When I press Enter button
  Then I check that <nameOfGood> in the url
Examples:
    | nameOfGood   | 
    | iPhone14     |
@5
Scenario: As a user, I want to navigate to empty shopping cart
  When I click on the shoppingCartButton on the header page
  Then I check that I am on the order page
  Then I should see emptyBasketScreen on the order page
@6
Scenario: As a user, I want to see dicounted goods
  When I click on the discounted goods button on the main page
  Then I should see dicountedGoods on the main page
@7
Scenario: As a user, I want navigate to the special offers page
  When I click on the bonusProgrammButton on the header page
  Then I check that I am on the specialoffers page
  Then And check that buySomethingButton has red color