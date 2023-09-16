const Page = require("../page");
const Actions = require("../../Common/Actions");
const Assertions = require("../../Common/Assertions");
const CommonLib = require("../../Common/CommonLib");
let timeout = 5000;
console.log("timeout : " + timeout);

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ManageAccountScreen extends Page {
  /**
   * define selectors using getter methods
   */

  get btnSignIn() {
    return $("//android.widget.TextView[@text='Sign in']");
  }

  get txtEmail() {
    return $("//android.widget.EditText[@resource-id='login.email']");
  }

  get txtPassword() {
    return $("//android.widget.EditText[@resource-id='login.password']");
  }

  get btnSignInWithLock() {
    return $("//android.widget.Button[@text=' SIGN IN']");
  }

  get lnkSignOut() {
    return $("//android.widget.TextView[@text='Sign out']");
  }

  get lnkBack() {
    return $("//android.widget.TextView[@text='Back']");
  }

  async clickOnlnkBack() {
    await Actions.waitForElementForDisplay(this.lnkBack, timeout);
    await Actions.doClickOn(this.lnkBack);
  }

  async verifylnkSignOut() {
    await Actions.waitForElementForDisplay(this.lnkSignOut, timeout);
    Assertions.verifyTrue(await Actions.isElementDisplayed(this.lnkSignOut));
  }

  async LoginToApp(email, pass) {
    await Actions.waitForElementForDisplay(this.txtEmail);
    const isFound = await Actions.getElementText(this.txtEmail);
    console.log("Email entered Found ? : " + isFound);
    if (!isFound) {
      await Actions.enterText(this.txtEmail, email);
    }

    await Actions.enterText(this.txtPassword, pass);
    await Actions.doClickOn(this.btnSignInWithLock);
    await CommonLib.wait(5000);
  }

  async verifybtnSignIn() {
    await Actions.waitForElementForDisplay(this.btnSignIn, timeout);
    Assertions.verifyTrue(await Actions.isElementDisplayed(this.btnSignIn));
  }

  async clickOnbtnSignIn() {
    await Actions.waitForElementForDisplay(this.btnSignIn, timeout); // Taking much time to click
    await Actions.doClickOn(this.btnSignIn);
  }
}

module.exports = new ManageAccountScreen();
