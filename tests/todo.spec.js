const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {
    await page.goto('http://localhost:8080/magewire/examples');

    await page.getByPlaceholder('Task Description...').click();
    await page.getByPlaceholder('Task Description...').fill('First task');
    await page.getByPlaceholder('Task Description...').press('Enter');
    await page.getByRole('button', { name: 'Save' }).click();
    await expect(page.getByText('First task')).toBeVisible({ timeout: 120000 });
    await page.getByPlaceholder('Task Description...').click();
    await page.getByPlaceholder('Task Description...').fill('Second task');
    await page.getByPlaceholder('Task Description...').press('Tab');
    await page.getByRole('button', { name: 'Save' }).press('Enter');
    // await page.getByRole('button', { name: 'Close message' }).click();

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

    await page.getByPlaceholder('Firstname').click();
    await page.getByPlaceholder('Firstname').fill('Firstname');
    await page.getByPlaceholder('Lastname').click();
    await page.getByPlaceholder('Lastname').fill('Lastname');
    await page.getByPlaceholder('Email', { exact: true }).click();
    await page.getByPlaceholder('Email', { exact: true }).fill('Email@email.email');
    await page.getByRole('button', { name: 'Validate' }).click();
    await expect(page.getByText('Validation success!')).toBeVisible();

    await page.locator('#reacticon').getByText('1', { exact: true }).click();
    await page.getByRole('button', { name: '+1' }).click();
    await page.locator('#reacticon').getByText('2').click();
    await page.getByRole('button', { name: '−1' }).click();
    await page.locator('#reacticon').getByText('1', { exact: true }).click();
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
