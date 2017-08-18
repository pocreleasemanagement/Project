import { ReleasemanagementPage } from './app.po';

describe('releasemanagement App', () => {
  let page: ReleasemanagementPage;

  beforeEach(() => {
    page = new ReleasemanagementPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
