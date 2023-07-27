import puppeteer from 'puppeteer';
jest.setTimeout(30000); // 30 seconds


describe('show/hide an event details', () => {
    let browser;
    let page;
    beforeAll(async () => {
        browser = await puppeteer.launch({
            // headless: false,
            // slowMo: 250, // slow down by 250ms,
            // timeout: 0 // removes any puppeteer/browser timeout limitations (this isn't the same as the timeout of jest)
          });
            page = await browser.newPage();
      await page.goto('http://localhost:3000/');
      await page.waitForSelector('.event');
    });
  
    afterAll(() => {
      browser.close();
    });
    test('An event element is collapsed by default', async () => {
        // if your event's details have a different selector, use it instead of .event .details
        const eventDetails = await page.$('.event .details');
        expect(eventDetails).toBeNull();
      });

    test('User can expand an event to see its details', async () => {
        await page.click('.event .show-details-button');
        const eventDetails = await page.$('.event .details');
        expect(eventDetails).toBeDefined();
      });

    test('User can collapse an event to hide its details', async () => {
        await page.click('.event .show-details-button');
        const eventDetails = await page.$('.event .details');
        expect(eventDetails).toBeDefined();
      });
});