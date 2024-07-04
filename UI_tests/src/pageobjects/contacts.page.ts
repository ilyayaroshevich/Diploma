import { $, $$ } from '@wdio/globals'
import BasePage from './base.page.ts'

class ContactsPage extends BasePage {
  url: any
  writeUsButton: any
  contactTitle: any
  contactTitleText: any
  constructor() {
    super()
    this.url = 'https://www.21vek.by/services/contacts.html'
    this.writeUsButton = $("[class='g-btn g-button b-write-us-btn']")
    this.contactTitle = $("[id='page_header']")
    this.contactTitleText = 'Контакты'

  }

  async getCssPropertywriteUsButton() {
    return await this.writeUsButton.getCSSProperty('background')
  }
}

export default new ContactsPage()
