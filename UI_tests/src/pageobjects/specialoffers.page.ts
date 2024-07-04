import { $, $$ } from '@wdio/globals'
import BasePage from './base.page.ts'

class SpecialoffersPage extends BasePage {
  url: any
  buySomethingButton: any
  constructor() {
    super()
    this.url = 'https://www.21vek.by/special_offers/bonus.html'
    this.buySomethingButton = $("[class='g-buybtn']")
  }

}

export default new SpecialoffersPage()
