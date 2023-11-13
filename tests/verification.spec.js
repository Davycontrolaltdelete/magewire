const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {
    await page.goto('/magewire/examples');

    await page.waitForTimeout(2000);

const {expect} = require("@playwright/test");
await page.getByPlaceholder('Firstname').click();
await page.getByPlaceholder('Firstname').fill('Firstname');
await page.getByPlaceholder('Lastname').click();
await page.getByPlaceholder('Lastname').fill('Lastname');
await page.getByPlaceholder('Email', { exact: true }).click();
await page.getByPlaceholder('Email', { exact: true }).fill('Email@email.email');
await page.getByRole('button', { name: 'Validate' }).click();
await expect(page.getByText('Validation success!')).toBeVisible();



});