import { $, $$ } from '@wdio/globals'
import BasePage from './base.page.ts'

class Searchpage extends BasePage {
  url: any
  constructor() {
    super()
    this.url = /^https:\/\/www\.21vek\.by\/search\/\?sa=&term=iPhone14/
  }
}

export default new Searchpage()
