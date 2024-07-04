import { expect, browser } from '@wdio/globals'

export async function setValue(inputElement: WebdriverIO.Element, value: string): Promise<void> {
    await inputElement.waitForDisplayed({ timeout: 5000 })
    await inputElement.setValue(value)
  }  

export async function clickOnButton(
  buttonElement: WebdriverIO.Element,
  waitForClickable: boolean = false,
) {
  if (waitForClickable) {
    await buttonElement.waitForClickable()
  }
  await buttonElement.click()
}

export async function elementIsDisplayed(
  element: WebdriverIO.Element,
  expected: boolean,
  timeout = 5000,
): Promise<void> {
  await element.waitForDisplayed({
    timeout,
    interval: 500,
    reverse: !expected,
  })

  const actual = await element.isDisplayed()
  expect(actual).toEqual(expected)
}

export async function getTextIsEqual(
  element: WebdriverIO.Element,
  expectedText: string,
): Promise<void> {
  await browser.waitUntil(
    async () => {
      const actual = await element.getText()
      expect(actual).toEqual(expectedText)
      return true
    },
    {
      timeout: 5000,
    },
  )
}

export async function assertCssProperty(
  element: WebdriverIO.Element,
  cssProperty: string,
  expectedValue: string,
) {
  const cssValue = await element.getCSSProperty(cssProperty)
  expect(cssValue.value).toMatch(expectedValue)
}
