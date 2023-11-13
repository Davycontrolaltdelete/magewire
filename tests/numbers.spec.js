const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {
    await page.goto('/magewire/examples');

    await page.waitForTimeout(2000);



    let number = page.locator('#reacticon');
    let button = page.getByRole('button', { name: '+1' });
    let button2 = page.getByRole('button', { name: '+7' });


const {expect} = require("@playwright/test");
await number.getByText('1', { exact: true }).click();
await page.getByRole('button', { name: '+1' }).click();
await number.getByText('2').click();
await page.getByRole('button', { name: '−1' }).click();
await number.getByText('1', { exact: true }).click();
await page.getByLabel('Show configuration').check();
await page.getByPlaceholder('number').click();
await page.getByPlaceholder('number').fill('7');
await page.getByRole('button', { name: '+7' }).click();
await expect(page.locator('#reacticon').getByText('8')).toBeVisible();
await page.getByRole('button', { name: '+7' }).click();
await expect(page.locator('#reacticon').getByText('15')).toBeVisible();
await page.getByRole('button', { name: '+7' }).click();
await expect(page.locator('#reacticon').getByText('22')).toBeVisible();
await page.getByRole('button', { name: '−7' }).click();
await expect(page.locator('#reacticon').getByText('15')).toBeVisible();
await page.getByRole('button', { name: 'Shuffle' }).click();



});
