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

    //     await page.getByRole('cell', { name: '2' }).toBeVisible();
    //     await page.getByRole('button', { name: '»' }).click();
    // await page.getByRole('cell', { name: '10', exact: true }).nth(1).toBeVisible();
    //     await page.getByRole('button', { name: '»' }).click();
    // await page.getByRole('cell', { name: '20', exact: true }).nth(1).toBeVisible();
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
    let button2 = page.getByRole('button', { name: '+7' });
    let buttonmin = page.getByRole('button', { name: '-1' });
    let button2min = page.getByRole('button', { name: '-7' });


    const {expect} = require("@playwright/test");
    await expect(number.getByText('1')).toBeVisible();
    await button.click();
    await expect(number.getByText('2')).toBeVisible();
    await buttonmin.click();
    await expect(number.getByText('1')).toBeVisible();
    await page.getByLabel('Show configuration').check();
    await page.getByPlaceholder('number').click();
    await page.getByPlaceholder('number').fill('7');
    await button2.click();
    await expect(number.getByText('8')).toBeVisible();
    await button2.click();
    await expect(number.getByText('15')).toBeVisible();
    await button2.click();
    await expect(number.getByText('22')).toBeVisible();
    await button2min.click();
    await expect(number.getByText('15')).toBeVisible();

});

