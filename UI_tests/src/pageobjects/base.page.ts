import { browser } from '@wdio/globals'

export default class BasePage {
  async maximizeWindow() {
    await browser.maximizeWindow()
  }

  async getUrl() {
    return await browser.getUrl()
  }

  async deleteSession() {
    await browser.deleteSession()
  }
}
