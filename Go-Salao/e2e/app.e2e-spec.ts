import { GoSalaoPage } from './app.po';

describe('go-salao App', function() {
  let page: GoSalaoPage;

  beforeEach(() => {
    page = new GoSalaoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
