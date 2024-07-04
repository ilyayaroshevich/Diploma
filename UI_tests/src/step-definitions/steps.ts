import { Given, When, Then, BeforeAll } from '@wdio/cucumber-framework'
import { expect, $ } from '@wdio/globals'

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
} from '../consts/commonFunctions.js'

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

Given(/^I am on the (\w+) page$/, async (page) => {
  await pages[page].open()
})

Given(/^I accepte Cookies$/, async () => {
  await clickOnButton(CookiesPage.acceptCookieButton)
})

When(/^I click on the (\w+) on the (\w+) page$/, async (buttonName, pageName) => {
  const page = pages[pageName]
  const buttonElement = page && page[buttonName]
  await clickOnButton(buttonElement)
})

Then(/^I should see (\w+) on the (\w+) page$/, async (elementName, pageName) => {
  const page = pages[pageName]
  const element = page && page[elementName]
  await elementIsDisplayed(await element, true)
})

When(/^I enter (.+) and (.+)$/, async (email, password) => {
  await setValue(LoginPage.emailfield, email)
  await setValue(LoginPage.passwordField, password)
})

Then(/^I check that (.+) is correct$/, async (error) => {
  await LoginPage.waitForErrorMessage(error)
})

Then(/^I check that I am on the (\w+) page$/, async (pageName) => {
  const page = pages[pageName]
  const currentUrl = await page.getUrl()
  expect(currentUrl).toEqual(page.url)
})

When(/^I enter (.+) in the search field$/, async (nameOfGood) => {
  await setValue(HeaderPage.searchField, nameOfGood)
})

Then(/^I check that (\w+) in the url$/, async (goodName) => {
  const currentUrl = await basePage.getUrl()
  expect(currentUrl).toMatch(SearchPage.url)
})

When(/^I press Enter button$/, async () => {
  await browser.keys('Enter')
})

When(/^I click on the discounted goods button on the main page$/, async () => {
  await MainPage.clickOnDiscountedGoodsButton()
})

Then(/^And check that buySomethingButton has red color$/, async () => {
  const colorOfBuySmthButton = await SpecialoffersPage.getCssPropertybuySomethingButton()
  expect(colorOfBuySmthButton.value).toMatch('rgba(234, 22, 83, 1)')
})

Then(/^And check that there is contact text$/, async () => {
  await getTextIsEqual(ContactsPage.contactTitle, 'Контакты')
})

Then(/^And check that writeUsButton has blue color$/, async () => {
  const colorOfBuySmthButton = await ContactsPage.getCssPropertywriteUsButton()
  expect(colorOfBuySmthButton.value).toMatch('rgba(0, 114, 188, 1)')
})

Then(/^And check that there is recommends text$/, async () => {
  await getTextIsEqual(RecommendsPage.recommends, 'Рекомендуемые товары')
})
