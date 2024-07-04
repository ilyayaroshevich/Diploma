import { $, $$ } from '@wdio/globals'
import BasePage from './base.page.ts'

class PromoPage extends BasePage {
  allPromoTitle: any
  url: any
  constructor() {
    super()
    this.allPromoTitle = $("[class^='style_title__c0jN1']")
    this.url = 'https://www.21vek.by/special_offers/promo.html'
  }

}

export default new PromoPage()
