const puppeteer = require("puppeteer");

async function Scraping(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const rawTxt = await page.evaluate(() => {
    const element = document.evaluate(
      "/html/body/div/div[2]/div[1]/div[1]/span[1]",
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    ).singleNodeValue;
    return element.textContent.trim();
  });
  console.log({ rawTxt });

  await browser.close();
}

Scraping("https://quotes.toscrape.com/");
