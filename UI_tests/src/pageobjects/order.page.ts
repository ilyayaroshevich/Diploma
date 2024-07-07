import { $, $$ } from '@wdio/globals'
import BasePage from './base.page.ts'

class OrderPage extends BasePage {
  emptyBasket: any
  url: any
  constructor() {
    super()
    this.emptyBasket = $("[data-testid='empty-basket-screen']")
    this.url = 'https://www.21vek.by/order/?&checkTab=true'
  }
}

export default new OrderPage()
