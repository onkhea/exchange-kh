// Import necessary packages
const puppeteer = require('puppeteer');

// Constants
const CHROMIUM_PATH = "https://vomrghiulbmrfvmhlflk.supabase.co/storage/v1/object/public/chromium-pack/chromium-v123.0.0-pack.tar";

// Function to get browser instance
async function getBrowser() {
    if (process.env.NODE_ENV === "production") {
        const chromium = require("@sparticuz/chromium-min");
        const puppeteerCore = require("puppeteer-core");
        
        const executablePath = await chromium.executablePath(CHROMIUM_PATH);
        
        const browser = await puppeteerCore.launch({
            args: chromium.args,
            defaultViewport: chromium.defaultViewport,
            executablePath,
            headless: chromium.headless,
        });
        return browser;
    } else {
        const browser = await puppeteer.launch();
        return browser;
    }
}

// Main function to handle GET request
// async function handleGetRequest(req, res) {
//     const browser = await getBrowser();
  
//     const page = await browser.newPage();
//     await page.goto("https://example.com");
//     const pdf = await page.pdf();
//     await browser.close();
    
//     // Send PDF as response
//     res.setHeader("Content-Type", "application/pdf");
//     res.end(pdf);
// }

module.exports = getBrowser;
