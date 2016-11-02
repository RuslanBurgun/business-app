import { BuissnescontactPage } from './app.po';

describe('buissnescontact App', function() {
  let page: BuissnescontactPage;

  beforeEach(() => {
    page = new BuissnescontactPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
