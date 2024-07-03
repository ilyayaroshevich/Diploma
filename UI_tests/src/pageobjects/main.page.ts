import { $ } from '@wdio/globals'
import BasePage from './base.page.ts'


class MainPage extends BasePage {
  url: any
  goodCatalog: any
  electronicsButton:any
  constructor() {
    super()
    this.url = 'https://www.21vek.by/'
    this.goodCatalog = $("[class='styles_categoriesContainer__Nijol']")
    this.electronicsButton = $("a[href='/electronics/']")
  }

  public open() {
    return browser.url(`https://www.21vek.by/`)
  }
}

export default new MainPage()
