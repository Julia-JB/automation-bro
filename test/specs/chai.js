const expectChai = require("chai").expect;
const should = require("chai").should();
const assert = require("chai").assert;

describe("Watches Page", () => {
  it("should show the 'Shop by category' image carousel", async () => {
    await browser.url(
      "https://www.ebay.com/b/Watches-Parts-Accessories/260324/bn_2408535"
    );

    const categoryCarousel = await $(
      ".container#mainContent section:nth-child(1) .carousel"
    );
    await expect(categoryCarousel).toBeDisplayed();
  });

  it("should display the carousel title", async () => {
    const carouselTitle = await $(
      ".container#mainContent section:nth-child(1) h2"
    );
    const carouselTitleText = await carouselTitle.getText();
    expectChai(carouselTitleText).to.not.be.empty;
    assert.isNotEmpty(carouselTitleText);
  });

  it("should contain a link to Watch Accessories and verify that it is clickable", async () => {
    let accessoriesLink = await $(
      '.b-guidancecard__link[href*="Watch-Accessories"]'
    );
    const tag = await accessoriesLink.getTagName();
    await expect(accessoriesLink).toBeClickable();
    expectChai(tag).to.be.equal("a");
    tag.should.equal("a");
  });

  it("should click the accessories link in the carousel and verify the new url", async () => {
    let accessoriesLink = await $(
      'a.b-guidancecard__link[href*="Watch-Accessories"]'
    );
    await accessoriesLink.click();
    const url = await browser.getUrl();
    expectChai(url).to.include("/Watch-Accessories/");
  });
});
