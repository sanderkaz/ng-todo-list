import { browser, by, element } from 'protractor';

export class TodoListPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('todo-root h1')).getText();
  }
}
