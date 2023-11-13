const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {
    await page.goto('/magewire/examples');

    await page.waitForTimeout(2000);



});