import { Given, When, Then } from '@wdio/cucumber-framework'
import { expect, $ } from '@wdio/globals'

import MainPage from '../pageobjects/main.page.js'
import LoginPage from '../pageobjects/login.page.js'
import HeaderPage from '../pageobjects/header.page.js'
import CookiesPage from '../pageobjects/cookies.page.js'
import PromoPage from '../pageobjects/promo.page.js'
import BasePage from '../pageobjects/base.page.js'
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

When(/^I enter incorrect (.+) and (.+)$/, async (email, password) => {
  await setValue(LoginPage.emailfield, email)
  await setValue(LoginPage.passwordField, password)
})

Then(/^I check that (.+) is correct$/, async (error) => {
  await LoginPage.waitForErrorMessage(error)
})

Then(/^I check that (\w+) name is correct$/, async (CheckingElement, pageName) => {
  const page = pages[pageName]
  const element = page && page[CheckingElement]
  await getTextIsEqual(element, 'Все акции')
})

Then(/^I check amount of goods strings$/, async () => {
  const childElements = PromoPage.childElements
  const numberOfChildren = await childElements.length
  expect(numberOfChildren).toEqual(12) 
})

Then(/^I check that I am on the (\w+) page$/, async (pageName) => {
  const page = pages[pageName]
  const currentUrl = await page.getUrl()
  expect(currentUrl).toEqual(page.url)
})
