/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */

  public get submitButton() {
    return $('button#submit');
  }

  // methods
  public async clickSubmitButton() {
    await this.submitButton.scrollIntoView();
    await this.submitButton.click();
  }

  public open(path: string) {
    return browser.url(`https://demoqa.com/${path}`);
  }
}
