const SearchPage = require("../../pages/search.page");
const resources = require("../resources");
const waitForTextChange = require("../utilities/helper");
const allureReporter = require("@wdio/allure-reporter").default;

describe("Ebay Product Search", () => {
  it("should open the main url and verify the title", async () => {
    await SearchPage.open();
    await expect(browser).toHaveTitle(resources.homeTitle);
  });

  it("should search for the product and verify the search field value", async () => {
    allureReporter.addSeverity("Critical");
    await SearchPage.searchInput.addValue("laptop");
    await SearchPage.seachButton.click();
    await expect(SearchPage.searchInput).toHaveValue("laptop");
  });

  it("should redirect to a new page and verify the title", async () => {
    await expect(browser).toHaveTitle(resources.laptopTitle);
  });

  it("should update the search category", async () => {
    allureReporter.addFeature("search category update");
    waitForTextChange(SearchPage.category, "PC Laptops & Netbooks", 3000);
    await expect(SearchPage.category).toHaveText("PC Laptops & Netbooks");
  });
});
