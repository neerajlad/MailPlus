const OSVERSION = process.platform;

class Actions {
  async isElementDisplayed(elem) {
    // const el = await $(elem);
    const isDisplayed = await elem.isDisplayed();
    console.log("Element isDisplayed Value  ==>  ", isDisplayed);
    return isDisplayed;
  }

  async doClickOn(elem) {
    await this.isElementDisplayed(elem);
    console.log("Clicking On ==> ", await elem.getText());
    await elem.click();
  }

  async getElementText(elem) {
    await this.isElementDisplayed(elem);
    const elemText = await elem.getText();
    console.log("Element Text is  ==> ", elemText);
    return elemText;
  }

  async enterText(elem, inputText) {
    await this.isElementDisplayed(elem);
    await elem.clearValue();
    await elem.setValue(inputText);
    console.log("Entered Text is  ==> ", inputText);
  }

  async enterTextAndPressEnter(elem, inputText) {
    await this.isElementDisplayed(elem);
    await elem.setValue(inputText);
    await browser.pause(4000);
    await browser.keys(["Enter"]);
    // await elem.setValue("\uE007");
    console.log("Entered Text is  ==> ", inputText);
  }

  async pressEnter() {
    await browser.pause(4000);
    await browser.keys(["Enter"]);
    console.log("Pressed Entered");
  }

  async pressDeleteMultipleTimes(n) {
    await browser.pause(3000);

    switch (OSVERSION) {
      case "darwin":
        console.log("MacOS");
        await browser.keys(["Meta", "a"]);
        for (var i = 0; i < n; i++) {
          await browser.keys(["Delete"]);
        }
        break;
      case "linux":
        await browser.keys(["Control", "a"]);
        for (var i = 0; i < n; i++) {
          await browser.keys(["Delete"]);
        }
        console.log("Linux operating system");
        break;
      case "Windows_NT":
        console.log("windows operating system");
        await browser.keys(["Control", "a"]);
        for (var i = 0; i < n; i++) {
          await browser.keys(["Delete"]);
        }
        break;
      default:
        console.log("other operating system");
    }

    console.log("Pressed Deleted Key  ==> ", n);
  }

  async pressEcs() {
    await browser.pause(3000);

    switch (OSVERSION) {
      case "darwin":
        console.log("MacOS");
        await browser.keys(["Escape"]);
        break;
      case "linux":
        await browser.keys(["Escape"]);
        console.log("Linux operating system");
        break;
      case "Windows_NT":
        console.log("windows operating system");
        await browser.keys(["Escape"]);
        break;
      default:
        console.log("other operating system");
    }

    console.log("Pressed Escape Key  ==> ");
  }

  async enterTextAndPressTab(elem, inputText) {
    await browser.keys(["Backspace"]);
    await browser.keys(["Backspace"]);
    await browser.keys(["Backspace"]);
    await browser.keys(["Backspace"]);
    await browser.keys(["Backspace"]);
    await browser.keys(["Backspace"]);
    await browser.keys(["Backspace"]);
    await browser.pause(2000);
    await elem.setValue(inputText);
    await browser.pause(2000);
    // await elem.setValue("\uE004");
    await browser.keys(["Tab"]);
    console.log("Entered Text is  ==> ", inputText);
  }

  async waitForElementForClickable(elem, elementWaitTimeout) {
    // const el = await $(elem);
    await elem.waitForClickable({ timeout: elementWaitTimeout });
    // console.log("waitForClickable element completed  ==> ", elem);
  }

  async waitForElementForDisplay(elem, elementWaitTimeout) {
    await elem.waitForDisplayed({ timeout: elementWaitTimeout });
  }

  async waitForElementForNotDisplay(elem) {
    //	const el = await $(elem);
    await elem.waitForDisplayed({ reverse: true, timeout: 120000 });
    // console.log("waitForElementForNotDisplay element completed  ==> ", elem);
  }

  async waitForElementForEnabled(elem, elementWaitTimeout) {
    // const el = await $(elem);
    await elem.waitForEnabled({ timeout: elementWaitTimeout });
    // console.log("waitForEnabled element completed  ==> ", elem);
  }

  async isElementEnabled(elem) {
    const isElement = await elem.isEnabled();
    return isElement;
  }

  async waitForElementForExist(elem, elementWaitTimeout) {
    // const el = await $(elem);
    await elem.waitForExist({ timeout: elementWaitTimeout });
    // console.log("waitForExist element completed  ==> ", elem);
  }

  async waitUntilElement(elem, elementWaitTimeout) {
    // const el = await $(elem);
    // await elem.waitUntil({ timeout: elementWaitTimeout });
    // console.log("waitUntil element completed  ==> ", elem);
    await browser.waitUntil(async () => await elem.isDisplayed(), {
      timeout: elementWaitTimeout, // Maximum wait time in milliseconds (adjust as needed)
      timeoutMsg: "Element did not become displayed within the specified timeout.",
    });
  }

  async selectElementByVisibleText(elem, dropdownValue) {
    // const el = await $(elem);
    await elem.selectByVisibleText(dropdownValue);
    // console.log(await elem.getText("option:checked"));
  }

  async getElementAttributeValueByAttribute(elem, attributeName) {
    // const el = await $(elem);
    const attributeValue = await elem.getAttribute(attributeName);
    console.log("getAttribute element completed  ==> ", attributeValue);
    return attributeValue;
  }

  async clearText(elem) {
    await elem.clearValue();
    console.log("Element cleared ==>  ");
  }

  async isElementNotExist(elem, elementWaitTimeout) {
    // const el = await $(elem);
    const isFound = await elem.waitForExist({ timeout: elementWaitTimeout, reverse: true });
    console.log("waitForExist element Not Exists completed  ==> ", elem);
    return isFound;
  }

  async isElementExists(elem) {
    // const el = await $(elem);
    const isFound = await elem.isExisting();
    console.log("isElementExists status  ==> ", isFound);
    return isFound;
  }

  async hoverOn(elem) {
    await elem.moveTo();
    console.log("Element Hovered  ==>  ");
  }

  async ScrollTo(elem) {
    await elem.scrollIntoView();
    console.log("Element ScrollTo  ==>  ");
  }

  async hideMobileKeypad() {
    // Hide the keyboard
    await driver.hideKeyboard();
    console.log("Hide Keyboard  ==>  ");
  }

  async switchToNewTab(matcher) {
    await browser.switchWindow(matcher);
    console.log("Switched to New windows  ==>  ", matcher);
    console.log("Switched to New windows  ==>  ", await browser.getUrl());
  }

  async closeNewlyOpenTab() {
    await browser.closeWindow();
  }

  async getCurrentURL() {
    await browser.getUrl();
    console.log("Close tab ==>  ", await browser.getUrl());
  }

  async clearCookies() {
    console.log("get Cookies:", await browser.getCookies()); // outputs: []
    await browser.execute("localStorage.clear()");
    await browser.deleteCookies();
    let cookies = await browser.getCookies();
    console.log("Cookies:", cookies); // outputs: []
  }

  async takeScreenshot() {
    await browser.takeScreenshot();
  }

  async setSeekBarValue(elem, value) {
    // Assuming the SeekBar's minimum value is 0 and maximum value is 100
    const seekBarLocation = await elem.getLocation();
    const seekBarWidth = await elem.getSize("width");
    const xOffset = seekBarLocation.x + (seekBarWidth / 100) * value - 1;
    const yOffset = seekBarLocation.y + (await elem.getSize("height")) / 2;

    browser.touchAction([{ action: "press", x: xOffset, y: yOffset }, { action: "moveTo", x: xOffset, y: yOffset }, "release"]);
  }

  async scrollHorizontally() {
    // Define the coordinates for scrolling (adjust as needed)
    const startX = 1000; // Starting X-coordinate (horizontal)
    const startY = 500; // Y-coordinate (vertical)
    const endX = 500; // Ending X-coordinate (horizontal)

    // Perform the scroll action
    await driver.touchAction([{ action: "press", x: startX, y: startY }, { action: "moveTo", x: endX, y: startY }, "release"]);
  }

  async scrollVertically() {
    // Define the coordinates for scrolling (adjust as needed)
    const startX = 500; // X-coordinate (horizontal)
    const startY = 1000; // Starting Y-coordinate (vertical)
    const endY = 500; // Ending Y-coordinate (vertical)

    // Perform the scroll action
    await driver.touchAction([{ action: "press", x: startX, y: startY }, { action: "moveTo", x: startX, y: endY }, "release"]);
  }

  async SCrollToElement(elem) {
    await driver.executeScript("arguments[0].scrollIntoView();", [elem]);
  }

  async SwipeUp() {
    await driver.touchAction([
      { action: "press", x: 500, y: 1000 }, // Start at these coordinates (adjust as needed)
      { action: "wait", ms: 2000 }, // Wait for 1 second (adjust as needed)
      { action: "moveTo", x: 500, y: 500 }, // Move to these coordinates (adjust as needed)
      "release",
    ]);
  }

  async SwipeRight(elem) {
    // await driver.touchAction([
    //   { action: "press", x: 500, y: 500 }, // Start at these coordinates (adjust as needed)
    //   { action: "wait", ms: 2000 }, // Wait for 1 second (adjust as needed)
    //   { action: "moveTo", x: 1000, y: 500 }, // Move to these coordinates (adjust as needed)
    //   "release",
    // ]);

    // Get the location of the element
    const location = await elem.getLocation();

    // Define the coordinates for the swipe
    const startX = location.x + 10; // Add a small offset to avoid swiping directly on the element
    const startY = location.y;
    const endX = startX + 500; // Adjust the swipe distance as needed (in pixels)

    // Perform the swipe action
    await driver.touchAction([
      { action: "press", x: startX, y: startY },
      { action: "wait", ms: 2000 }, // Wait for 1 second (adjust as needed)
      { action: "moveTo", x: endX, y: startY },
      "release",
    ]);
  }

  async SwipeleftOnly() {
    await driver.touchAction([
      { action: "press", x: 800, y: 800 }, // Start at these coordinates (adjust as needed)
      { action: "wait", ms: 2000 }, // Wait for 1 second (adjust as needed)
      { action: "moveTo", x: 300, y: 800 }, // Move to these coordinates (adjust as needed)
      "release",
    ]);
  }
  async Swipeleft(elem) {
    // await driver.touchAction([
    //   { action: "press", x: 500, y: 500 }, // Start at these coordinates (adjust as needed)
    //   { action: "wait", ms: 2000 }, // Wait for 1 second (adjust as needed)
    //   { action: "moveTo", x: 1000, y: 500 }, // Move to these coordinates (adjust as needed)
    //   "release",
    // ]);

    // Get the location of the element
    const location = await elem.getLocation();

    // Define the coordinates for the swipe
    const startX = location.x + 10; // Add a small offset to avoid swiping directly on the element
    const startY = location.y;
    const endX = startX + 300; // Adjust the swipe distance as needed (in pixels)

    // Perform the swipe action
    await driver.touchAction([
      { action: "press", x: startX, y: startY },
      { action: "wait", ms: 2000 }, // Wait for 1 second (adjust as needed)
      { action: "moveTo", x: startX - 500, y: startY },
      "release",
    ]);
  }

  async swipteRight1(elementSelector) {
    const maxAttempts = 10;
    let attempts = 0;

    while (attempts < maxAttempts) {
      try {
        const element = $(elementSelector);
        if (element.isClickable()) {
          element.click();
          return;
        } else {
          // Swipe horizontally, you may need to adjust the coordinates based on your application
          browser.touchAction([
            { action: "press", x: 600, y: 1000 }, // Start point
            { action: "wait", ms: 2000 }, // Wait for 1 second (adjust as needed)
            { action: "moveTo", x: 100, y: 1000 }, // End point
            "release",
          ]);
        }
      } catch (error) {
        console.error(`Error while attempting to click element: ${error}`);
        break; // Break out of the loop in case of error
      }
      attempts++;
    }

    console.error(`Element ${elementSelector} not clickable after maximum attempts.`);
  }

  async tapByCoordinate(x1, y1) {
    // Define the coordinates for the click
    const xCoordinate = x1; // X-coordinate (horizontal)
    const yCoordinate = y1; // Y-coordinate (vertical)

    // Perform the click action
    await driver.touchAction([
      { action: "press", x: xCoordinate, y: yCoordinate },
      { action: "wait", ms: 200 }, // Wait for 1 second (adjust as needed)
      "release",
    ]);

    // await driver.executeScript("mobile: tap", { x: xCoordinate, y: yCoordinate });
  }

  async tapByCoordinateSelector(x1, y1) {
    // Define the coordinates for the click
    const xCoordinate = 300; // X-coordinate (horizontal)
    const yCoordinate = 500; // Y-coordinate (vertical)

    // Perform the click action
    await driver.touchAction([
      { action: "press", x: xCoordinate, y: yCoordinate },
      { action: "wait", ms: 200 }, // Wait for 1 second (adjust as needed)
      "release",
    ]);
    // Execute a click at specific coordinates
    // await driver.executeScript("mobile: tap", { x: xCoordinate, y: yCoordinate });
  }
}

module.exports = new Actions();
