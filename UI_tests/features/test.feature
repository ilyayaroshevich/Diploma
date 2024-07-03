@all
Feature: 21 century bewsite
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
  # Then I should see searchResult on the main page
  # When I click on the searchButton on the main page
  # Then I should see <nameOfGood> on the search page
Examples:
    | nameOfGood   | 
    | iPhone14     |
    | test         |
    | 00           |