import { $ } from '@wdio/globals'
import BasePage from './base.page.ts'


class MainPage extends BasePage {
  url: any
  goodCatalog: any
  electronicsButton: any
  searchResult: any
  searchButton:any
  constructor() {
    super()
    this.url = 'https://www.21vek.by/'
    this.goodCatalog = $("[class='styles_categoriesContainer__Nijol']")
    this.electronicsButton = $("a[href='/electronics/']")
    this.searchResult = $("[class='SearchResults_content__lRYQw']")
    this.searchButton = $("[class='Search_searchBtn__Tk7Gw']")
  }

  public open() {
    return browser.url(`https://www.21vek.by/`)
  }
}

export default new MainPage()
