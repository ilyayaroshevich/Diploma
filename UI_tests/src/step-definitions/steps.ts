import { Given, When, Then, BeforeAll } from '@wdio/cucumber-framework'
import { expect, $ } from '@wdio/globals'
import './commonSteps.ts'
import MainPage from '../pageobjects/main.page.js'
import LoginPage from '../pageobjects/login.page.js'
import HeaderPage from '../pageobjects/header.page.js'
import CookiesPage from '../pageobjects/cookies.page.js'
import PromoPage from '../pageobjects/promo.page.js'
import BasePage from '../pageobjects/base.page.js'
import ElectronicsPage from '../pageobjects/electronics.page.js'
import SearchPage from '../pageobjects/search.page.js'
import OrderPage from '../pageobjects/order.page.js'
import SpecialoffersPage from '../pageobjects/specialOffers.page.js'
import ContactsPage from '../pageobjects/contacts.page.js'
import RecommendsPage from '../pageobjects/recommends.page.js'
import {
  clickOnButton,
  elementIsDisplayed,
  getTextIsEqual,
  setValue,
  assertCssProperty,
} from '../consts/commonFunctions.js'
import * as consts from '../consts/consts.js'
const basePage = new BasePage()

const pages = {
  main: MainPage,
  login: LoginPage,
  header: HeaderPage,
  cookies: CookiesPage,
  promo: PromoPage,
  electronics: ElectronicsPage,
  search: SearchPage,
  order: OrderPage,
  specialoffers: SpecialoffersPage,
  contacts: ContactsPage,
  recommends: RecommendsPage,
}

When(/^I enter (.+) and (.+)$/, async (email, password) => {
  await setValue(LoginPage.emailfield, email)
  await setValue(LoginPage.passwordField, password)
})

Then(/^I check that (.+) is correct$/, async (error) => {
  await LoginPage.waitForErrorMessage(error)
})

When(/^I enter (.+) in the search field$/, async (nameOfGood) => {
  await setValue(HeaderPage.searchField, nameOfGood)
})

Then(/^I check that (\w+) in the url$/, async () => {
  const currentUrl = await basePage.getUrl()
  expect(currentUrl).toMatch(SearchPage.url)
})

When(/^I press Enter button$/, async () => {
  await browser.keys('Enter')
})

When(/^I click on the discounted goods button on the main page$/, async () => {
  await MainPage.clickOnDiscountedGoodsButton()
})


