import { $ } from '@wdio/globals'
import BasePage from './base.page.ts'


class MainPage extends BasePage {
  url: any;
  constructor() {
    super()
    this.url = 'https://www.21vek.by/';
  }

  public open() {
    return browser.url(`https://www.21vek.by/`)
  }
}

export default new MainPage()
