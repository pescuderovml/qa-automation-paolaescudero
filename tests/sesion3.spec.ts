import { test, expect } from '@playwright/test';

test('page title', async ({ page }) => {
    
    await page.goto('https://demo.playwright.dev/todomvc');
    
    await expect(page).toHaveTitle(/TodoMVC/);
});

test('add task', async ({ page }) => {

    await page.goto('https://demo.playwright.dev/todomvc');

    await page.getByPlaceholder('What needs to be done?').fill('Hacer la tarea de QA');

    await page.getByPlaceholder('What needs to be done?').press('Enter');

    await expect(page.getByText('Hacer la tarea de QA')).toBeVisible();
});

//chequear que la tarea este completa
test('check task complete', async ({ page }) => {
    
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
    await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Tarea 1');
    await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
    await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Tarea 2');
    await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
    await page.getByRole('listitem').filter({ hasText: 'Tarea 1' }).getByLabel('Toggle Todo').check();
    await page.getByRole('link', { name: 'Completed' }).click();
    await expect(page.getByText('Tarea 1')).toBeVisible();
  
});