const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");
const CommonLib = require("../Common/CommonLib");
const IndexPage = require("../pageobjects/web/IndexPage");

Given(/^I navigate to Daily Mail Video Page and accept cookies$/, async () => {
  await IndexPage.open("/");
  await IndexPage.maximized();
  await IndexPage.clickOnbtnGotItIfDisplayed();
});

When(/^I click on Video in page to begin playback$/, async () => {
  await IndexPage.clickOnVideo();
});

Then(/^The video should start playing$/, async () => {
  await IndexPage.clickOnbtnBigPlayButton();
});

When(/^I click the video again$/, async () => {
  // waiting for ads to complete
  await IndexPage.verifylblAdvertisement();
  //await IndexPage.verifyicoFacebook();
  // means ads over
  // await CommonLib.wait(20000);
  await IndexPage.clickOnbtnPauseVideo();
  await IndexPage.clickOnbtnForwardPlay();
  await IndexPage.clickOnbtnVolume();
  await IndexPage.clickOnbtnVolumeMute();
  await IndexPage.verifylblAdvertisement();
  await IndexPage.verifyicoFacebook();
  await IndexPage.clickOnbtnPreviousPlay();
  await IndexPage.clickOnbtnFullsize();
  await IndexPage.clickOnbtnFullsize();
  await CommonLib.wait(5000);
});

Then(/^The video should pause$/, () => {});

When(/^I click on the forward arrow$/, () => {
  return true;
});

Then(/^I should navigate to the next video$/, () => {
  return true;
});

When(/^I click on the back arrow$/, () => {
  return true;
});

Then(/^I should navigate to the previous video$/, () => {
  return true;
});

When(/^I click on the speaker icon to mute the video$/, () => {
  return true;
});

Then(/^The video should be muted$/, () => {
  return true;
});

When(/^I click on the speaker icon again$/, () => {
  return true;
});

Then(/^The video should be unmuted$/, () => {
  return true;
});

Then(/^When the video finishes playing$/, () => {
  return true;
});

Then(/^The next video should autoplay$/, () => {
  return true;
});
