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
    When I enter incorrect <email> and <password>
    When I click on the loginButton on the login page
    Then I check that <error> is correct
Examples:
    | email        | password  | error               |
    | test@test.com| test12345 |Неправильный пароль. |
@2
Scenario: As a user, I want to check amount of promo goods strings
    When I click on the allActionsButton on the header page
    Then I check that I am on the promo page
    # Then I check that AllPromoTitle name is correct
    Then I check amount of goods strings

