import { $ } from '@wdio/globals'
import BasePage from './base.page.ts'

class LoginPage extends BasePage {
  loginP: any
  login: any
  emailfield: any
  passwordField: any
  errorMessage: any
  constructor() {
    super()
    this.loginP = $("[data-testid='modal']")
    this.login = $("[data-testid='loginSubmit']")
    this.emailfield = $("[data-testid='login-form-email']")
    this.passwordField = $("[data-testid='login-form-password']")
    this.errorMessage = $("[class$='__LEN7M']")
  }

  public open() {
    return browser.url(`https://www.21vek.by/`)
  }

  public async waitForErrorMessage(expectedText: string): Promise<void> {
    await browser.waitUntil(async () => {
      const actual = await this.errorMessage.getText()
      expect(actual).toContain(expectedText)
      return true
    })
  }
}

export default new LoginPage()
