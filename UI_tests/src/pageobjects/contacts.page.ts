import { $, $$ } from '@wdio/globals'
import BasePage from './base.page.ts'

class ContactsPage extends BasePage {
  url: any
  writeUsB: any
  contacts: any
  constructor() {
    super()
    this.url = 'https://www.21vek.by/services/contacts.html'
    this.writeUsB = $("[class='g-btn g-button b-write-us-btn']")
    this.contacts = $("[id='page_header']")
  }
}

export default new ContactsPage()
