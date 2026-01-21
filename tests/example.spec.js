 // @ts-check
// import { test, expect } from '@playwright/test';
const {test, expect} = require('@playwright/test');

test('Browser Context Playwright Test', async ({ browser }) => {
  
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.google.com/");
});

test('Page Playwright Test', async ({page}) => {
  
  await page.goto("https://www.google.com/");
  console.log(await page.title()); // to get Title
   await expect(page).toHaveTitle('Google');
});
