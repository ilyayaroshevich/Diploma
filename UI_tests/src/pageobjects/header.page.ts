import { $ } from '@wdio/globals'
import BasePage from './base.page.ts'

class HeaderPage extends BasePage {
  accountButton: any
  loginButton: any
  profile: any
  allActionsButton: any
  goodCatalogButton: any
  searchField: any
  shoppingCartButton: any;
  constructor() {
    super()
    this.accountButton = $("[class='styles_userToolsToggler__c2aHe']")
    this.loginButton = $("[data-testid='loginButton']")
    this.profile = $("[class^='styles_list__X7MxD']")
    this.allActionsButton = $("[href$='promo.html'][data-index]")
    this.goodCatalogButton = $("[class='styles_catalogButton__z9L_j']")
    this.searchField = $("[id='catalogSearch']")
    this.shoppingCartButton = $("[class='headerCartBox headerCartBoxEmpty']")
  }

  public open() {
    return browser.url(`https://www.21vek.by/`)
  }
}

export default new HeaderPage()
