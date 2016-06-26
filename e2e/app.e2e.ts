import { DashfluxPage } from './app.po';

describe('dashflux App', function() {
  let page: DashfluxPage;

  beforeEach(() => {
    page = new DashfluxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('dashflux works!');
  });
});
