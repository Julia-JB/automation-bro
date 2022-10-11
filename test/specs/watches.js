const WatchesPage = require("../../pages/watches.page");
const resources = require("../resources");
const expectChai = require("chai").expect;

describe("Watches Page", () => {
  before(async () => {
    await WatchesPage.open();
    await WatchesPage.fashionLink.moveTo();
    await WatchesPage.watchesLink.waitForDisplayed({ timeout: 3000 }); // Explicit Wait
    await WatchesPage.watchesLink.click();
    await WatchesPage.watchesAndPartsLink.click();
  });

  after(() => {
    browser.url("https://www.ebay.com/");
  });

  it("should show the 'Shop by category' image carousel", async () => {
    await expect(WatchesPage.categoryCarousel).toBeDisplayed();
  });

  xit("should verify the category list", async () => {
    // await WatchesPage.getCategoriesListText();
    //  console.log(await WatchesPage.getCategoriesListArray()); //. or join(", ") .toString(", ")
    const watchesCategoryList = await WatchesPage.getCategoriesListArray();
    console.log(watchesCategoryList);

    expectChai(watchesCategoryList).to.deep.equal(resources.watchesCategory);
  });

  it("should display the carousel title", async () => {
    await expect(WatchesPage.carouselTitle).toHaveText("Shop by Category");
  });

  it("should contain a link to Watch Accessories and verify that it is clickable", async () => {
    await expect(WatchesPage.accessoriesLink).toBeClickable();
  });

  it("should click the accessories link in the carousel and verify the new url", async () => {
    await WatchesPage.accessoriesLink.click();

    const url = await browser.getUrl();
    expectChai(url).to.include("/Watch-Accessories/");
  });
});
