export class DashfluxPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('dashflux-app h1')).getText();
  }
}
