const Page = require("../page");
const Actions = require("../../Common/Actions");
const CommonLib = require("../../Common/CommonLib");
const Assertions = require("../../Common/Assertions");
let timeout = 5000;
console.log("timeout : " + timeout);

/**
 * sub page containing specific selectors and methods for a specific page
 */
class NewspaperScreen extends Page {
  /**
   * define selectors using getter methods
   */

  get lnkSettings() {
    return $("~Tap me to open the settings menu");
  }

  get lblRecentIssue() {
    return $("//android.widget.TextView[@text='Recent issues']");
  }

  get lblRecentIssueFirstImg() {
    return $("//android.widget.TextView[@text='Recent issues']/..//android.widget.HorizontalScrollView[2]/android.view.ViewGroup/android.view.ViewGroup[3]");
  }

  get lblSeeMore() {
    return $("//android.widget.TextView[@text='SEE MORE']");
  }

  get btnFallOverClose() {
    return $("//android.widget.TextView[@text='Failover']/..//android.view.ViewGroup[1]");
  }

  get img10thAprEdition() {
    return $("//android.widget.TextView[@text='10 April 2023']");
  }

  get ico10thAprEdition_1() {
    return $("(//android.widget.TextView[@text='27 June 2023'])[2]");
  }

  get ico10thAprEdition_1_download() {
    return $("(//android.widget.TextView[@text='27 June 2023'])[1]/../following-sibling::android.view.ViewGroup");
  }

  get titleTuesday27June() {
    return $("//android.widget.TextView[@text='Tuesday, 27 June']");
  }

  get icoBack() {
    return $("~Tap me to get out of the reader");
  }

  get lblImageCount() {
    return $("//android.widget.TextView[@text='11']/..");
  }

  get lblPageText() {
    return $("//android.widget.TextView[@text='Phoebe, the chainmail champion of the Indiana Jones red carpet']");
  }

  get linearObject() {
    return $("//android.widget.LinearLayout");
  }

  async clickOnlinearObject() {
    await Actions.waitForElementForDisplay(this.linearObject, timeout);
    await Actions.doClickOn(this.lnkClose);
    await this.linearObject.click({ x: 30 });
  }

  async verifylblPageText() {
    await Actions.waitForElementForDisplay(this.lblPageText, 10000);
    Assertions.verifyTrue(await Actions.isElementDisplayed(this.lblPageText));
  }

  async clickOnlblImageCount() {
    // Switch to WebView context
    // const contexts = await driver.getContexts();
    // console.log("context -------" + contexts);
    // await driver.switchContext(contexts[contexts.length - 1]); // Switch to the last context (which is likely the WebView)
    await CommonLib.wait(4000);
    await Actions.waitForElementForDisplay(this.lblImageCount, timeout);
    await Actions.doClickOn(this.lblImageCount);

    // Switch back to native context
    // await driver.switchContext(contexts[0]); // Assuming the native context is the first in the list
  }

  get tabNewspaper() {
    return $("~Newspaper");
  }

  get tabArchive() {
    return $("~Tap me to open the archive");
  }

  get lnkClose() {
    return $("//android.widget.TextView[@text='Close']");
  }
  async clickOnlnkClose() {
    await Actions.waitForElementForDisplay(this.lnkClose, timeout);
    await Actions.doClickOn(this.lnkClose);
  }

  get lbl11To11() {
    return $("//android.widget.TextView[@text='11 of 11']");
  }

  async verifylbl11To11() {
    await Actions.waitForElementForDisplay(this.lbl11To11, 10000);
    Assertions.verifyTrue(await Actions.isElementDisplayed(this.lbl11To11));
  }

  async swipeTilllbl11To11() {
    let counter = 0;

    do {
      await CommonLib.wait(2000);
      await Actions.SwipeleftOnly();
      let isFound = await Actions.isElementDisplayed(this.lbl11To11);
      console.log("lbl11To11 displayed ? : " + (await Actions.isElementDisplayed(this.lbl11To11)));
      if (isFound) {
        // await Actions.Swipeleft(this.lblRecentIssueFirstImg);
        break; // Element found, break out of the loop
      }

      counter++;

      if (counter >= 5) {
        break;
      }
    } while (true);
  }

  async clickOnArchive() {
    await Actions.waitForElementForDisplay(this.tabArchive, timeout);
    await Actions.doClickOn(this.tabArchive);
  }

  async clickOntabNewspaper() {
    await Actions.waitForElementForDisplay(this.tabNewspaper, timeout);
    await Actions.doClickOn(this.tabNewspaper);
  }

  async clickOnicoBack() {
    await Actions.waitForElementForDisplay(this.icoBack, timeout);
    await Actions.doClickOn(this.icoBack);
  }

  async verifytitleTuesday27June() {
    await CommonLib.wait(5000);
    await Actions.waitForElementForDisplay(this.titleTuesday27June, 10000);
    Assertions.verifyTrue(await Actions.isElementDisplayed(this.titleTuesday27June));
  }

  async clickOnico10thAprEdition_1_download() {
    await CommonLib.wait(2000);
    await Actions.waitForElementForDisplay(this.ico10thAprEdition_1_download, timeout);
    await Actions.doClickOn(this.ico10thAprEdition_1_download);
    console.log("---------------0");
  }

  async clickOnlblSeeMore() {
    await CommonLib.wait(4000);
    await Actions.waitForElementForDisplay(this.lblSeeMore, timeout);
    await Actions.doClickOn(this.lblSeeMore);
  }

  async verifylnkSettings() {
    await Actions.waitForElementForDisplay(this.lnkSettings, timeout);
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

  async scrollToRecentIssue() {
    let counter = 0;

    do {
      await CommonLib.wait(2000);
      await Actions.SwipeUp();
      await CommonLib.wait(2000);
      let isFound = await Actions.isElementDisplayed(this.lblRecentIssue);
      console.log("Recent Issue displayed ? : " + (await Actions.isElementDisplayed(this.lblRecentIssue)));
      if (isFound) {
        await Actions.SwipeUp();
        await Actions.SwipeUp();
        await Actions.SwipeUp();
        break; // Element found, break out of the loop
      }

      counter++;

      if (counter >= 5) {
        break;
      }
    } while (true);
  }

  async scrollTo27thEdition() {
    let counter = 0;

    do {
      await CommonLib.wait(2000);
      await Actions.SwipeUp();
      await CommonLib.wait(2000);
      let isFound = await Actions.isElementDisplayed(this.ico10thAprEdition_1_download);
      console.log("27th edition displayed ? : " + (await Actions.isElementDisplayed(this.ico10thAprEdition_1_download)));
      if (isFound) {
        await Actions.SwipeUp();
        await Actions.SwipeUp();
        break; // Element found, break out of the loop
      }

      counter++;

      if (counter >= 15) {
        break;
      }
    } while (true);
  }
  async NavigateTo3Page() {
    await Actions.SwipeleftOnly();
    await CommonLib.wait(2000);
    await Actions.SwipeleftOnly();
    await CommonLib.wait(2000);
  }

  async TapOnImageOn3rdPage() {
    await CommonLib.wait(2000);

    await Actions.tapByCoordinate(900, 1100);
    console.log("tapped on 3rd page");
  }

  async tapOnGallary() {
    await CommonLib.wait(2000);
    await Actions.tapByCoordinate(500, 500);
    console.log("tapped on gallary");
  }

  async scrollTo27thEditionDownloadedAndClick() {
    let counter = 0;

    do {
      await CommonLib.wait(2000);
      await Actions.SwipeUp();
      await CommonLib.wait(2000);
      let isFound = await Actions.isElementDisplayed(this.ico10thAprEdition_1);
      console.log("27th edition displayed ? : " + (await Actions.isElementDisplayed(this.ico10thAprEdition_1)));
      if (isFound) {
        await Actions.SwipeUp();
        await Actions.SwipeUp();
        await Actions.doClickOn(this.ico10thAprEdition_1);
        break; // Element found, break out of the loop
      }

      counter++;

      if (counter >= 15) {
        break;
      }
    } while (true);
  }

  async scrollToRecentIssueSeeMore() {
    // await Actions.swipteRight1(this.lblRecentIssueFirstImg);

    let counter = 0;

    do {
      await CommonLib.wait(2000);
      await Actions.Swipeleft(this.lblRecentIssueFirstImg);
      await CommonLib.wait(2000);
      let isFound = await Actions.isElementDisplayed(this.lblSeeMore);
      console.log("See More displayed ? : " + (await Actions.isElementDisplayed(this.lblSeeMore)));
      if (isFound) {
        // await Actions.Swipeleft(this.lblRecentIssueFirstImg);
        break; // Element found, break out of the loop
      }

      counter++;

      if (counter >= 5) {
        break;
      }
    } while (true);
  }
}

module.exports = new NewspaperScreen();
