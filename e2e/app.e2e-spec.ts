import { SuprematismPipesPage } from './app.po';

describe('suprematism-pipes App', function() {
  let page: SuprematismPipesPage;

  beforeEach(() => {
    page = new SuprematismPipesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
