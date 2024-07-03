import { $, $$ } from '@wdio/globals'
import BasePage from './base.page.ts'

class PromoPage extends BasePage {
  allPromoTitle: any
  listOfGoods: any
  stringOfGoods: any
  url: any
  constructor() {
    super()
    this.allPromoTitle = $("[class^='style_title__c0jN1']")
    this.listOfGoods = $("[class^='style_rootListOfProducts']")
    this.stringOfGoods = $$("[class^='style_rootListOfProducts']>")
    this.url = 'https://www.21vek.by/special_offers/promo.html'
  }

  get childElements(): any {
    return $$("[class='style_gridRowWrapper__69kSh']")
  }
  public open() {
    return browser.url(`https://www.21vek.by/`)
  }
}

export default new PromoPage()
