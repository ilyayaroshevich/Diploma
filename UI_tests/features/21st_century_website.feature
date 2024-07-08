@all
Feature: 21 century website
    Background:
        Given I am on the main page
        Given I accepte Cookies
    @1
    Scenario Outline: As a user, I want to login with incorrect credentials
        When I click on the account button on the header page
        Then I should see profile window on the header page
        When I click on the login button on the header page
        Then I should see loginP popup on the login page
        When I enter <email> and <password>
        When I click on the login button on the login page
        Then I check that <error> is correct
        Examples:
            | email              | password   | error                |
            | test@test.com      | test12345  | Неправильный пароль. |
            | test@test.com      | test1      | Неправильный пароль. |
    @2
    Scenario: As a user, I want to navigate to promo page
        When I click on the allActions button on the header page
        Then I check that I am on the promo page
    @3
    Scenario: As a user, I want to navigate to electronics page
        When I click on the goodCatalog button on the header page
        Then I should see goodCatalog screen on the main page
        When I click on the electronics button on the main page
        Then I check that I am on the electronics page
    @4
    Scenario Outline: As a user, I want to navigate to searched good page
        When I click on the search field on the header page
        When I enter <nameOfGood> in the search field
        Then I should see searchResult screen on the main page
        When I press Enter button
        Then I check that <nameOfGood> in the url
        Examples:
            | nameOfGood |
            | iPhone14   |
            | Xiaomi     |
    @5
    Scenario: As a user, I want to navigate to empty shopping cart
        When I click on the shoppingCart button on the header page
        Then I check that I am on the order page
        Then I should see emptyBasket screen on the order page
    @6
    Scenario: As a user, I want to see dicounted goods
        When I click on the discounted goods button on the main page
        Then I should see dicountedGoods carousel on the main page
    @7
    Scenario Outline: As a user, I want navigate to the special offers page
        When I click on the bonusProgramm button on the header page
        Then I check that I am on the specialoffers page
        Then And check that buySomething button has <color> on the specialoffers page
        Examples:
            | color                |
            | rgba(234, 22, 83, 1) |
    @8
    Scenario Outline: As a user, I want navigate to the contact page
        When I click on the moreB button on the header page
        When I click on the contactB button on the header page
        Then I check that I am on the contacts page
        Then Check that contacts title has <text> text on the contacts page
        Then And check that writeUsB button has <color> on the contacts page
        Examples:
            | color                | text     |
            | rgba(0, 114, 188, 1) | Контакты |
    @9
    Scenario Outline: As a user, I want navigate to the recommends page
        When I click on the watchAllB button on the main page
        Then I check that I am on the recommends page
        Then Check that recommends title has <text> text on the recommends page
        Examples:
            | text                 |
            | Рекомендуемые товары |

    @10
    Scenario Outline: As a user, I want check that reviews are displaying
        When I check that I am on the main page
        Then I should see reviewsC screen on the main page
        Then Check that reviews title has <text> text on the main page
        Examples:
            | text   |
            | Обзоры |