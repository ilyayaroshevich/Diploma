import { $ } from '@wdio/globals'
import BasePage from './base.page.ts'

class HeaderPage extends BasePage {
  account: any
  login: any
  profile: any
  allActions: any
  goodCatalog: any
  search: any
  shoppingCart: any
  bonusProgramm: any
  moreB: any
  contactB: any
  constructor() {
    super()
    this.account = $("[class='styles_userToolsToggler__c2aHe']")
    this.login = $("[data-testid='loginButton']")
    this.profile = $("[class^='styles_list__X7MxD']")
    this.allActions = $("[href$='promo.html'][data-index]")
    this.goodCatalog = $("[class='styles_catalogButton__z9L_j']")
    this.search = $("[id='catalogSearch']")
    this.shoppingCart = $("[class='headerCartBox headerCartBoxEmpty']")
    this.bonusProgramm = $(
      "a[href='/special_offers/bonus.html'][class='styles_navMenuLink__w1crD']",
    )
    this.moreB = $(
      "[class='styles_communicationItem__IUjz2']>[class='styles_wrapper___8H5L']>div>button[class='styles_headerTitle__OyXGt']",
    )
    this.contactB = $(
      "[href='/services/contacts.html'][class='styles_communicationItemBox__K66_y']",
    )
  }

  public open() {
    return browser.url(`https://www.21vek.by/`)
  }
}

export default new HeaderPage()
