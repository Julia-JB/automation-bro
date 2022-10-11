const Page = require("./page");

class SearchPage extends Page {
  get searchInput() {
    return $("#gh-ac");
  }

  get seachButton() {
    return $("#gh-btn");
  }

  get category() {
    return $("#gh-cat option:nth-child(1)");
  }

  async open() {
    await browser.url("/");
  }
}

module.exports = new SearchPage();
