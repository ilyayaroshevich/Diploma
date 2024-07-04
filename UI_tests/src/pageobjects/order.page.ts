import { $, $$ } from '@wdio/globals'
import BasePage from './base.page.ts'

class OrderPage extends BasePage {
  emptyBasketScreen: any
  url: any
  constructor() {
    super()
    this.emptyBasketScreen = $("[data-testid='empty-basket-screen']")
    this.url = 'https://www.21vek.by/order/?&checkTab=true'
  }
}

export default new OrderPage()
