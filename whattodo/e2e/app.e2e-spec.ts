import { WhattodoPage } from './app.po';

describe('whattodo App', () => {
  let page: WhattodoPage;

  beforeEach(() => {
    page = new WhattodoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
