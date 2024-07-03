import { $ } from '@wdio/globals'
import BasePage from './base.page.ts'

class HeaderPage extends BasePage {
  accountButton: any
  loginButton: any
  profile: any;
  constructor() {
    super()
    this.accountButton = $("[class='styles_userToolsToggler__c2aHe']");
    this.loginButton = $("[data-testid='loginButton']");
    this.profile = $("[class^='styles_list__X7MxD']");
  }

  public open() {
    return browser.url(`https://www.21vek.by/`)
  }
}

export default new HeaderPage()
