import { MwPage } from './app.po';

describe('mw App', function() {
  let page: MwPage;

  beforeEach(() => {
    page = new MwPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
