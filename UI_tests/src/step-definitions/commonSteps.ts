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
  assertCssProperty,
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

Then(/^I check that I am on the (\w+) page$/, async (pageName) => {
  const page = pages[pageName]
  const currentUrl = await page.getUrl()
  expect(currentUrl).toEqual(page.url)
})

Then(/^And check that (\w+) has (.+) on the (\w+) page$/, async (buttonName, color, pageName) => {
  const page = pages[pageName]
  const buttonElement = page && page[buttonName]
  await assertCssProperty(buttonElement, 'background', color)
})

Then(/^Check that (\w+) has (.+) text on the (\w+) page$/, async (elementName, text, pageName) => {
  const page = pages[pageName]
  const element = page && page[elementName]
  await getTextIsEqual(element, text)
})
