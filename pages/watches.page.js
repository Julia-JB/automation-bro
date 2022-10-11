const Page = require("./page");

class WatchesPage extends Page {
  get categoryCarousel() {
    return $(".container#mainContent section:nth-child(1) .carousel");
  }

  get carouselTitle() {
    return $(".container#mainContent section:nth-child(1) h2");
  }

  get carouselTitle() {
    return $(".container#mainContent section:nth-child(1) h2");
  }

  get accessoriesLink() {
    return $('a.b-guidancecard__link[href*="Watch-Accessories"]');
  }

  get categoriesList() {
    return $$('section[id="s0-16-12_2-0-1[0]-0-0"] ul li');
  }

  get fashionLink() {
    return $$(".hl-cat-nav a[href*=Fashion]")[0];
  }

  get watchesLink() {
    return $(".hl-cat-nav__js-link[href*=Wristwatches]");
  }

  get watchesAndPartsLink() {
    return $$(".seo-breadcrumb-text")[2];
  }

  async open() {
    await browser.url("https://www.ebay.com");
  }
  /*
  async getCategoriesListText() {
    console.log(await this.categoriesList.map((e) => e.getText())); // 
  }
*/
  async getCategoriesListArray() {
    const categoriesListArray = [];
    await this.categoriesList.map(async (element) =>
      categoriesListArray.push(await element.getText())
    );
    console.log(categoriesListArray);
    return categoriesListArray;
  }
}

module.exports = new WatchesPage();
