module.exports = waitForTextChange = (element, text, timeout) => {
  browser.waitUntil(
    async function () {
      return (await element.getText()) === text;
    },
    { timeout }
  );
};
