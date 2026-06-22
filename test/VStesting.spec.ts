import {test,expect} from '@playwright/test';
test('vs',async({page})=>{
    await page.goto('https://services.gst.gov.in/services/login');
    //expect(await page.screenshot()).toMatchSnapshot('gst_login.png');
//await expect(page).toHaveScreenshot('gst_login.png');

const logo = page.locator('img.logo');
await expect(logo).toHaveScreenshot('gst_logo.png');
});