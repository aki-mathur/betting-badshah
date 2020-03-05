import { BettingBadshahPage } from './app.po';

describe('betting-badshah App', () => {
  let page: BettingBadshahPage;

  beforeEach(() => {
    page = new BettingBadshahPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
