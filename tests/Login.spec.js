import {test, expect } from '@playwright/test';

test.describe('login naukari.com', () =>{
    test.use({
        viewport: { width: 1920, height: 1080 },
    });
    test('login with valid credentials', async({page}) => { 
        await page.goto("https://www.naukri.com/");
        await page.locator("#login_Layer").click()
        await expect(page.locator('div.login-layer')).toBeVisible();

       // await page.locator("//input[@placeholder='Enter your active Email ID / Username']").fill("shubhammmenewar@getMaxListeners.com");
       await page.getByPlaceholder('Enter your active Email ID / Username').fill("shubhammmenewar@getMaxListeners.com");
        await page.getByPlaceholder('Enter your password').fill('Smenewar@12345');
        await page.click('//button[@type="submit"]');
    })
    test('test', async ({ page }) => {
        await page.goto('https://parabank.parasoft.com/parabank/index.htm');
        await page.locator('input[name="password"]').click();
        await page.locator('input[name="password"]').fill('sjdhsjd');
        await page.getByRole('button', { name: 'Log In' }).click();
    });
})