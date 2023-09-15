const aPath = require("path");
const fs = require("fs");

class CommonLib {
  async pressKey(keyName) {
    switch (keyName) {
      case "enter":
        await browser.keys("\uE007");
        console.log("Pressed Entered....");
        break;
      case "tab":
        await browser.keys("\uE004");
        console.log("Pressed Tab....");
        break;
      default:
      // code block
    }
  }

  async wait(timeout) {
    console.log("wait for ...", timeout);
    await browser.pause(timeout);
  }
}

module.exports = new CommonLib();
