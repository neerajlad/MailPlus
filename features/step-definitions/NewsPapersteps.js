const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");
const CommonLib = require("../Common/CommonLib");
const ManageAccountScreen = require("../pageobjects/mobile/ManageAccountScreen");

const NewspaperScreen = require("../pageobjects/mobile/NewspaperScreen");
const SidePanelScreen = require("../pageobjects/mobile/SidePanelScreen");
const WelcomeScreen = require("../pageobjects/mobile/WelcomeScreen");

Given(/^I launch the app$/, async () => {
  await WelcomeScreen.clickOnbtnFallOverClose();
  await WelcomeScreen.clickOnCountineTillHomeScree();
  await NewspaperScreen.verifylnkSettings();
});

When(/^I scroll down to the Recent issues on the Newspaper tab$/, async () => {
  await WelcomeScreen.clickOnbtnFallOverClose();
  await NewspaperScreen.scrollToRecentIssue();
});

When(/^I scroll right to view more recent issues$/, async () => {
  await NewspaperScreen.scrollToRecentIssueSeeMore();
});

When(/^I tap on the See more button$/, async () => {
  await NewspaperScreen.clickOnlblSeeMore();
});

When(/^I go to the Archive tab$/, async () => {
  await NewspaperScreen.scrollTo27thEdition();
});

When(/^I tap to download the June 27 edition$/, async () => {
  await NewspaperScreen.clickOnico10thAprEdition_1_download();
});

When(/^I sign in with the provided credentials on the paywall carousel$/, async () => {
  await ManageAccountScreen.clickOnbtnSignIn();
  await ManageAccountScreen.LoginToApp("twilightsp2708@gmail.com", "National123!");
});

Then(/^I wait for the edition to complete downloading$/, async () => {
  await NewspaperScreen.verifytitleTuesday27June();
});

Given(/^I am on the downloaded June 27 edition$/, async () => {
  await NewspaperScreen.clickOnicoBack();
  await NewspaperScreen.clickOntabNewspaper();
  await NewspaperScreen.clickOnArchive();
  await NewspaperScreen.clickOnbtnFallOverClose();
  await NewspaperScreen.scrollTo27thEditionDownloadedAndClick();
});

When(/^I navigate to Page 3 on PDF view displaying Phoebe, the chainmail story$/, async () => {
  await NewspaperScreen.NavigateTo3Page();
});

When(/^I tap on the Gallery icon$/, async () => {
  await NewspaperScreen.TapOnImageOn3rdPage();
});

Then(/^Image Gallery is displayed on top of the ALB page$/, async () => {
  await NewspaperScreen.tapOnGallary();
});

Then(/^I tap on the camera icon to open full screen$/, async () => {
  await NewspaperScreen.swipeTilllbl11To11();
});

Then(/^I close the image by clicking on the Close button$/, async () => {
  await NewspaperScreen.clickOnlnkClose();
});
