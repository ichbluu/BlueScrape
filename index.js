const puppeteer = require("puppeteer");
const random_useragent = require('random-useragent');
const config = require('./config.json');

(async() => {
    
  console.log("Fetching URL, this may take a bit...");
  const browser = await puppeteer.launch({
      headless: false
  });
  const page = await browser.newPage();
  await page.setDefaultTimeout(5000);
  await page.setUserAgent(random_useragent.getRandom());
  await page.goto(config.url); 
  await page.click('a.ipsButton_large', { clickCount: 1})
  
})();
