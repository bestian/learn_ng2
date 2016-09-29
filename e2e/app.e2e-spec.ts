import { LearnNg2Page } from './app.po';

describe('learn-ng2 App', function() {
  let page: LearnNg2Page;

  beforeEach(() => {
    page = new LearnNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
