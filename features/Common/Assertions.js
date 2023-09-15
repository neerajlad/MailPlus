class Assertions {
  async verifyURL(expectedUrl) {
    await expect(browser).toHaveUrl(expectedUrl);
  }

  async verifyPageTitle(expectedUrl) {
    await expect(browser).toHaveTitle(expectedUrl);
  }

  async isElementDisplayed(elem) {
    await expect(elem).toBeDisplayed();
  }

  async isElementExists(elem) {
    await expect(elem).toExist();
  }

  async verifyElementText(elem, expectedText) {
    await expect(elem).toHaveText(expectedText);
  }

  async verifyText(actualText, expectedText) {
    await expect(actualText).toBe(expectedText);
  }

  async verifyTrue(actualBoolean) {
    await expect(actualBoolean).toBe(true);
  }

  async verifyFalse(actualBoolean) {
    await expect(actualBoolean).toBe(false);
  }
}
module.exports = new Assertions();
