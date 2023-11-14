const { test, expect } = require('@playwright/test');

test('Test that the todo behaves as expected', async ({ page }) => {
    await page.goto('/magewire/examples');

    await page.waitForTimeout(2000);


    let byPlaceholder = page.getByPlaceholder('Task Description...');
    await byPlaceholder.click();
    await byPlaceholder.fill('First task');
    await byPlaceholder.press('Enter');
    await page.getByRole('button', { name: 'Save' }).click();

    await byPlaceholder.click();
    await byPlaceholder.fill('Second task');
    await byPlaceholder.press('Tab');
    await page.getByRole('button', { name: 'Save' }).press('Enter');

    await expect(page.getByText('First task')).toBeVisible();
    await expect(page.getByText('Second task')).toBeVisible();

    await page.getByRole('button', { name: 'Close message' }).click();

});

test('Testing the shuffle function', async ({ page }) => {
    await page.goto('/magewire/examples');

    await page.waitForTimeout(2000);

    await page.getByRole('button', { name: 'Shuffle' }).click();
});

test('Test that we can click the button', async ({ page }) => {
    await page.goto('/magewire/examples');

    await page.waitForTimeout(2000);

    await expect(page.getByRole('cell', { name: '0', exact: true })).toBeVisible();
    await page.getByRole('button', { name: '»' }).click();
    await expect(page.getByRole('cell', { name: '10' }).first()).toBeVisible();
    await page.getByRole('button', { name: '»' }).click();
    await expect(page.getByRole('cell', { name: '20' }).first()).toBeVisible();
});

test('verification', async ({ page }) => {
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

test('testing adding/subtracting buttons', async ({ page }) => {
    await page.goto('/magewire/examples');

    await page.waitForTimeout(2000);

    let number = page.locator('#reacticon');
    let button = page.getByRole('button', { name: '+1' });
    let button2 = page.getByRole('button', { name: '−1' });


    await button.click();
    await button.click();
    await expect(number.getByText('3')).toBeVisible();
    await button2.click();
    await expect(number.getByText('2')).toBeVisible();
    await page.getByLabel('Show configuration').check();


});

