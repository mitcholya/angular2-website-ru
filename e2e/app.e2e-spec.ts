import { Angular2WebsiteRuPage } from './app.po';

describe('angular2-website-ru App', () => {
  let page: Angular2WebsiteRuPage;

  beforeEach(() => {
    page = new Angular2WebsiteRuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
