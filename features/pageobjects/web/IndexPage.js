const Page = require("../page");
const Actions = require("../../Common/Actions");
const CommonLib = require("../../Common/CommonLib");
const Assertions = require("../../Common/Assertions");
let timeout = 5000;
/**
 * sub page containing specific selectors and methods for a specific page
 */
class IndexPage extends Page {
  /**
   * define selectors using getter methods
   */

  get lnkVideoLink() {
    return $("//a[@href='/video/index.html']");
  }

  get btnGotIt() {
    return $("//button[text()='Got it']");
  }

  get btnBigPlayButton() {
    return $(".vjs-big-play-button");
  }

  get btnDefaultPlayVideo() {
    return $(".vjs-play-control vjs-control ");
  }

  get btnPlayVideo() {
    // To play pause video
    return $("//div[@class='vjs-play-control vjs-control  vjs-paused']");
  }

  get btnPauseVideo() {
    // To pause playing video
    return $("//div[@class='vjs-play-control vjs-control  vjs-playing']");
  }

  get btnPreviousPlay() {
    return $("//div[@class='mol-previous-control vjs-control']");
  }

  get btnForwardPlay() {
    return $("//div[@class='mol-skip-control vjs-control']");
  }

  get btnVolume() {
    return $("//div[@class='vjs-volume-menu-button vjs-menu-button vjs-control vjs-vol-3']");
  }

  get btnVolumeMute() {
    return $("//div[@class='vjs-volume-menu-button vjs-menu-button vjs-control vjs-vol-0']");
  }

  get btnFullsize() {
    return $("//div[@class='vjs-fullscreen-control vjs-control ']");
  }

  get icoFacebook() {
    return $("//div[@class='vjs-social-icon vjs-facebook-button-icon ']");
  }

  get lblAdvertisement() {
    return $("//div[@class='video-ad-label vjs-control']");
  }

  get lnkSports() {
    return $("//a[@href='/sport/index.html']");
  }

  get lblPremierLeague() {
    return $("//div[text()='Tables']/following-sibling::div");
  }

  get lnkViewfixtures() {
    return $("//div[text()='View fixtures']");
  }

  get btnTable() {
    return $("//div[text()='Results']/following-sibling::div[text()='Tables']");
  }

  get tableTeam() {
    return $$("//th[text()='PTS']/../../..//tbody/tr");
  }

  async clickOnbtnTable() {
    await Actions.waitForElementForDisplay(this.btnTable, timeout);
    await Actions.doClickOn(this.btnTable);
  }

  async clickOnlnkViewfixtures() {
    await Actions.waitForElementForDisplay(this.lnkViewfixtures, timeout);
    await Actions.doClickOn(this.lnkViewfixtures);
  }

  async scrollTolblPremierLeague() {
    await Actions.waitForElementForDisplay(this.lblPremierLeague);
    await Actions.ScrollTo(this.lblPremierLeague);
  }

  async clickOnlnkSports() {
    await Actions.waitForElementForDisplay(this.lnkSports, timeout);
    await Actions.doClickOn(this.lnkSports);
  }

  async clickOnbtnDefaultPlayVideo() {
    await Actions.waitForElementForDisplay(this.btnDefaultPlayVideo, timeout);
    await Actions.doClickOn(this.btnDefaultPlayVideo);
  }

  async clickOnbtnPlayVideo() {
    await Actions.waitForElementForDisplay(this.btnPlayVideo, timeout);
    await Actions.doClickOn(this.btnPlayVideo);
  }

  async clickOnbtnPauseVideo() {
    await Actions.waitForElementForDisplay(this.btnPauseVideo, 10000);
    await Actions.doClickOn(this.btnPauseVideo);
  }

  async clickOnVideo() {
    await Actions.waitForElementForDisplay(this.lnkVideoLink, timeout);
    await Actions.doClickOn(this.lnkVideoLink);
  }

  async clickOnbtnGotItIfDisplayed() {
    try {
      await Actions.waitForElementForDisplay(this.btnGotIt, timeout);
      var isDisplayed = await Actions.isElementDisplayed(this.btnGotIt);
      if (isDisplayed) {
        await Actions.doClickOn(this.btnGotIt);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async clickOnbtnBigPlayButton() {
    await Actions.waitUntilElement(this.btnBigPlayButton, 10000);
    await Actions.waitForElementForDisplay(this.btnBigPlayButton, timeout);
    await Actions.doClickOn(this.btnBigPlayButton);
  }

  async clickOnbtnPreviousPlay() {
    await Actions.waitForElementForDisplay(this.btnPreviousPlay, timeout);
    await Actions.doClickOn(this.btnPreviousPlay);
  }

  async clickOnbtnForwardPlay() {
    await Actions.waitForElementForDisplay(this.btnForwardPlay, timeout);
    await Actions.doClickOn(this.btnForwardPlay);
  }

  async clickOnbtnVolume() {
    await Actions.waitForElementForDisplay(this.btnVolume, timeout);
    await Actions.doClickOn(this.btnVolume);
  }

  async clickOnbtnVolumeMute() {
    await CommonLib.wait(3000);
    await Actions.waitForElementForDisplay(this.btnVolumeMute, timeout);
    await Actions.doClickOn(this.btnVolumeMute);
  }

  async clickOnbtnFullsize() {
    await Actions.waitForElementForDisplay(this.btnFullsize, timeout);
    await Actions.doClickOn(this.btnFullsize);
  }

  async verifyicoFacebook() {
    //await Actions.waitUntilElement(this.icoFacebook, 12000);
    await Actions.waitForElementForDisplay(this.icoFacebook, timeout);
  }

  async verifylblAdvertisement() {
    // await CommonLib.wait(25000);
    try {
      await Actions.waitUntilElement(this.lblAdvertisement, 20000);
      await Actions.waitForElementForNotDisplay(this.lblAdvertisement, 15000);
    } catch (error) {
      console.log("Ads Not displayed");
    }
  }
}

module.exports = new IndexPage();
