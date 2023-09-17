const Page = require("../page");
const Actions = require("../../Common/Actions");
const CommonLib = require("../../Common/CommonLib");
let timeout = 5000;
console.log("timeout : " + timeout);

/**
 * sub page containing specific selectors and methods for a specific page
 */
class WelcomeScreen extends Page {
  /**
   * define selectors using getter methods
   */

  get lbl1Of5() {
    if (browser.isAndroid) {
      return $("//android.widget.TextView[@text='Step 1 of 5']");
    } else {
      return $("ios Object");
    }
  }

  get lbl2Of5() {
    if (browser.isAndroid) {
      return $("//android.widget.TextView[@text='Step 2 of 5']");
    } else {
      return $("ios Object");
    }
  }

  get lbl3Of5() {
    if (browser.isAndroid) {
      return $("//android.widget.TextView[@text='Step 3 of 5']");
    } else {
      return $("ios Object");
    }
  }

  get lbl4Of5() {
    if (browser.isAndroid) {
      return $("//android.widget.TextView[@text='Step 4 of 5']");
    } else {
      return $("ios Object");
    }
  }

  get lbl5Of5() {
    if (browser.isAndroid) {
      return $("//android.widget.TextView[@text='Step 5 of 5']");
    } else {
      return $("ios Object");
    }
  }

  get btnFallOverClose() {
    if (browser.isAndroid) {
      return $("//android.widget.TextView[@text='Failover']/..//android.view.ViewGroup[1]");
    } else {
      return $("ios Object");
    }
  }

  get btnContinue() {
    if (browser.isAndroid) {
      return $("//android.widget.TextView[@text='Continue']");
    } else {
      return $("ios Object");
    }
  }

  get lnkSettings() {
    return $("~Tap me to open the settings menu");
  }

  async verifylnkSettings() {
    await Actions.waitForElementForDisplay(this.lnkSettings, timeout);
    await Actions.doClickOn(this.lnkSettings);
  }

  async verifylbl1Of5() {
    await Actions.waitForElementForDisplay(this.lbl1Of5, timeout);
    await Actions.doClickOn(this.lbl1Of5);
  }
  async clickOnlnkSettings() {
    await Actions.waitForElementForDisplay(this.lnkSettings, timeout);
    await Actions.doClickOn(this.lnkSettings);
  }

  async clickOnbtnFallOverClose() {
    await CommonLib.wait(5000);
    const isDisplayed = await Actions.isElementDisplayed(this.btnFallOverClose);
    if (isDisplayed) {
      await Actions.waitForElementForDisplay(this.btnFallOverClose, timeout);
      await Actions.doClickOn(this.btnFallOverClose);
    }
  }

  async clickOnCountineTillHomeScree() {
    await Actions.waitForElementForDisplay(this.lbl1Of5, timeout);
    await Actions.doClickOn(this.btnContinue);
    await Actions.waitForElementForDisplay(this.lbl2Of5, timeout);
    await Actions.doClickOn(this.btnContinue);
    await Actions.waitForElementForDisplay(this.lbl3Of5, timeout);
    await Actions.doClickOn(this.btnContinue);
    await Actions.waitForElementForDisplay(this.lbl4Of5, timeout);
    await Actions.doClickOn(this.btnContinue);
    await Actions.waitForElementForDisplay(this.lbl5Of5, timeout);
    await Actions.doClickOn(this.btnContinue);
    await Actions.waitForElementForDisplay(this.lnkSettings);
  }
}

module.exports = new WelcomeScreen();
