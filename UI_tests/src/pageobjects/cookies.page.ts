import { $ } from '@wdio/globals'
import BasePage from './base.page.ts'

class CookiesPage extends BasePage {
    acceptCookieButton: any;
  constructor() {
    super()
    this.acceptCookieButton = $("[class='Button-module__button Button-module__blue-primary']")
  }

  public open() {
    return browser.url(`https://www.21vek.by/`)
  }
}

export default new CookiesPage()
