import { $, $$ } from '@wdio/globals'
import BasePage from './base.page.ts'

class recommendsPage extends BasePage {
  url: any
  recommends: any
  constructor() {
    super()
    this.url = 'https://www.21vek.by/special_offers/recommend.html'
    this.recommends = $("[class='content__header'][id='page_header']")
  }
}

export default new recommendsPage()
