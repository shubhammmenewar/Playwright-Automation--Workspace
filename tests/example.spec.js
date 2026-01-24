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
   await page.locator("//textarea[@class='gLFyf']").fill("naukri.com")
   await page.locator("//div[@class='lnnVSe' and @aria-label='naukri.com']").click();
});

test('Login RahulShettyacadamy',async({page})=>{

  const username= page.locator('#username');
  const password= page.locator('#password');
  const signbtn=  page.locator("#signInBtn");

await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
console.log(await page.title);
await page.locator('#username').fill("rahulshetty");
await password.fill("Learning@830$3mK2");
await signbtn.click();
console.log(await page.locator("//div[@style='display: block;']").textContent());
await expect(page.locator("//div[@style='display: block;']")).toContainText('Incorrect');

} )

test('Verify how to get Single element over multiple found',async({page})=>{

  const username= page.locator('#username');
  const password= page.locator('#password');
  const signbtn=  page.locator("#signInBtn");

await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
console.log(await page.title);
await page.locator('#username').type("rahulshetty");
await password.type("Learning@830$3mK2");
console.log(await signbtn.textContent());
await signbtn.click();


} )
