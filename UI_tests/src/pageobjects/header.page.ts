import { $ } from '@wdio/globals'
import BasePage from './base.page.ts'

class HeaderPage extends BasePage {
  accountButton: any
  loginButton: any
  profile: any
  allActionsButton: any
  goodCatalogButton: any
  searchField: any
  shoppingCartButton: any
  bonusProgrammButton: any
  moreButton: any
  contactButton: any
  constructor() {
    super()
    this.accountButton = $("[class='styles_userToolsToggler__c2aHe']")
    this.loginButton = $("[data-testid='loginButton']")
    this.profile = $("[class^='styles_list__X7MxD']")
    this.allActionsButton = $("[href$='promo.html'][data-index]")
    this.goodCatalogButton = $("[class='styles_catalogButton__z9L_j']")
    this.searchField = $("[id='catalogSearch']")
    this.shoppingCartButton = $("[class='headerCartBox headerCartBoxEmpty']")
    this.bonusProgrammButton = $(
      "a[href='/special_offers/bonus.html'][class='styles_navMenuLink__w1crD']",
    )
    this.moreButton = $(
      "[class='styles_communicationItem__IUjz2']>[class='styles_wrapper___8H5L']>div>button[class='styles_headerTitle__OyXGt']",
    )
    this.contactButton = $(
      "[href='/services/contacts.html'][class='styles_communicationItemBox__K66_y']",
    )
  }

  public open() {
    return browser.url(`https://www.21vek.by/`)
  }
}

export default new HeaderPage()
