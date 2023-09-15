const Page = require("./page");
const Actions = require("../Common/Actions");
const Assertions = require("../Common/Assertions");
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
    return $("//android.widget.TextView[@text='Back']");
  }

  get mnuManageAccount() {
    return $("//android.widget.TextView[@text='Manage account']");
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
