const Page = require("../page");
const Actions = require("../../Common/Actions");
const Assertions = require("../../Common/Assertions");
let timeout = 5000;
console.log("timeout : " + timeout);

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SidePanelScreen extends Page {
  /**
   * define selectors using getter methods
   */

  get lnkBack() {
    if (browser.isAndroid) {
      return $("//android.widget.TextView[@text='Back']");
    } else {
      return $("ios Object");
    }
  }

  get mnuManageAccount() {
    if (browser.isAndroid) {
      return $("//android.widget.TextView[@text='Manage account']");
    } else {
      return $("ios Object");
    }
  }

  async verifymnuManageAccount() {
    await Actions.waitForElementForDisplay(this.mnuManageAccount, timeout);
    Assertions.verifyTrue(await Actions.isElementDisplayed(this.mnuManageAccount));
  }

  async clickOnlnkBack() {
    await Actions.waitForElementForDisplay(this.lnkBack, timeout);
    await Actions.doClickOn(this.lnkBack);
  }

  async clickOnmnuManageAccount() {
    await Actions.waitForElementForDisplay(this.mnuManageAccount, timeout);
    await Actions.doClickOn(this.mnuManageAccount);
  }
}

module.exports = new SidePanelScreen();
