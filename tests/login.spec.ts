import { test, expect} from '@playwright/test';

test('Verify login page elements', async({ page }) => { 

 await page.goto('https://www.saucedemo.com/');
 //await page.pause();

 await page.getByPlaceholder('username').fill('standar_user');

 await page.getByPlaceholder('Password').fill('secret_sauce');

 await page.getByRole('button', { name: 'login'}).click();

  await expect(page.getByText(/username and password do not match/i)).toBeVisible();

 //await expect(page).toHaveURL(/inventory/);

 });

// await expect(page.getByPlaceholder('username').fill('standard_user'));
 //await expect(page.getByPlaceholder('password'));
 //await expect(page.getByRole('button', {name : 'Login'})).toBeVisible//





