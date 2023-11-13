const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {
    await page.goto('/magewire/examples');

    await page.waitForTimeout(2000);
    // await page.waitForEvent('magewire:available');

    let byPlaceholder = page.getByPlaceholder('Task Description...');
    await byPlaceholder.click();
    await byPlaceholder.fill('First task');
    await byPlaceholder.press('Enter');

    await page.getByRole('button', { name: 'Save' }).click();
    await byPlaceholder.click();
    await byPlaceholder.fill('Second task');
    await byPlaceholder.press('Tab');
    await page.getByRole('button', { name: 'Save' }).press('Enter');
    await page.getByRole('button', { name: 'Shuffle' }).click();
    // await page.getByRole('button', { name: 'Close message' }).click();
    await expect(page.getByText('First task')).toBeVisible();
    await expect(page.getByText('Second task')).toBeVisible();




        await page.getByRole('button', { name: 'Shuffle' }).click();

    //     await page.getByRole('cell', { name: '2' }).toBeVisible();
    //     await page.getByRole('button', { name: '»' }).click();
    // await page.getByRole('cell', { name: '10', exact: true }).nth(1).toBeVisible();
    //     await page.getByRole('button', { name: '»' }).click();
    // await page.getByRole('cell', { name: '20', exact: true }).nth(1).toBeVisible();


        await page.getByPlaceholder('Search for something awesome...').click();

    // livewire auto update not working in tests
    //     await page.getByPlaceholder('Search for something awesome...').fill('test');
    // await page.getByRole('button', { name: 'Save' }).press('Enter');
    //    await expect(page.getByText(' random results found.')).toBeVisible();






});
