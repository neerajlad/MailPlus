const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");
const CommonLib = require("../Common/CommonLib");
const IndexPage = require("../pageobjects/web/IndexPage");

Given(/^I navigate to Daily Mail Video Page and accept cookies$/, async () => {
  await IndexPage.open("/");
  await IndexPage.clickOnbtnGotItIfDisplayed();
});

When(/^I click on the Sport menu$/, async () => {
  await IndexPage.clickOnlnkSports();
});

Then(/^I scroll down to the Premier League table$/, async () => {
  await IndexPage.scrollTolblPremierLeague();
});

Then(/^I click on View all tables$/, async () => {
  await IndexPage.clickOnlnkViewfixtures();
  await IndexPage.clickOnbtnTable();
});

Then("I retrieve the Pos and PTS for the team", async () => {
  await CommonLib.wait(5000);
  const rows = await IndexPage.tableTeam;
  const teamNames = ["Arsenal", "Brentford", "Burnley"];

  for (let teamName of teamNames) {
    // console.log("Team Name : " + teamName);
    let counter = 1; // Move the counter outside the loop

    for (const row of rows) {
      try {
        // const teamCell = await row.$(`(//td[@class='team_1zTYu'][text()='${teamName}'])[${counter}]`);
        const teamCell = await row.$(`(//th[text()='PTS']/../../..//tbody/tr/td[4])[${counter}]`);
        const teamN = await teamCell.getText();
        // console.log("teamCell  : " + (await teamCell.getText()));
        if (teamN.includes(teamName)) {
          const posCell = await row.$(`(//th[text()='PTS']/../../..//tbody/tr/td[1])[${counter}]`);
          const ptsCell = await row.$(`(//th[text()='PTS']/../../..//tbody/tr/td[10])[${counter}]`);
          // const ptsCell = await row.$("//th[text()='PTS']/../../..//tbody/tr/td[10]");

          const pos = await posCell.getText();
          const pts = await ptsCell.getText();

          console.log("=========================");
          console.log(`Position for ${teamName}: ${pos}`);
          console.log(`Points for ${teamName}: ${pts}`);
          console.log("=========================");
          break; // Exit the loop once we find the team
        }
      } catch (error) {
        console.error("Error:", error);
      }

      counter++;
    }
  }
});
