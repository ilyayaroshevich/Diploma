import { $, $$ } from '@wdio/globals'
import BasePage from './base.page.ts'

class ElectronicsPage extends BasePage {
  url: any
  constructor() {
    super()
    this.url = 'https://www.21vek.by/electronics/'
  }
}

export default new ElectronicsPage()
