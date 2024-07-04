import { $ } from '@wdio/globals'
import BasePage from './base.page.ts'

class MainPage extends BasePage {
  url: any
  goodCatalog: any
  electronicsButton: any
  searchResult: any
  searchButton: any
  chipHomeWrapperSelector: any
  childChipHomeWrapperSelector: any
  dicountedGoods:any
  constructor() {
    super()
    this.url = 'https://www.21vek.by/'
    this.goodCatalog = $("[class='styles_categoriesContainer__Nijol']")
    this.electronicsButton = $("a[href='/electronics/']")
    this.searchResult = $("[class='SearchResults_content__lRYQw']")
    ;(this.searchButton = $("[type='button'][class='Search_searchBtn__Tk7Gw']")),
      (this.chipHomeWrapperSelector =
        "header[class^='EntitiesList_header__wwu8B SpecialOffersList_entitylistHeader__MyjLn']>[class='ChipHome_wrapper__I0jqA']"),
      (this.childChipHomeWrapperSelector =
        "header[class^='EntitiesList_header__wwu8B SpecialOffersList_entitylistHeader__MyjLn']>[class='ChipHome_wrapper__I0jqA']>[class='ChipHome_chipWrapper__B_Ess']")
    this.dicountedGoods = $("[class='CardPrice_oldPrice__dc0rb'][data-testid='card-old-price']")
  }

  public open() {
    return browser.url(`https://www.21vek.by/`)
  }

  public async clickOnDiscountedGoodsButton() {
    const chipHomeWrapper = await $(this.chipHomeWrapperSelector)
    const childChipHomeWrappers = await chipHomeWrapper.$$(this.childChipHomeWrapperSelector)
    if (childChipHomeWrappers.length > 0) {
      const lastChildElement = childChipHomeWrappers[childChipHomeWrappers.length - 1]
      await lastChildElement.click()
    }
  }
}

export default new MainPage()
