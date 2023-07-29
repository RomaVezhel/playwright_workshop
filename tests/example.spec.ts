import { test, expect } from '@playwright/test';

  test('test', async ({ page }) => {
    await page.goto('https://shopdemo-alex-hot.koyeb.app/');
    await page.getByRole('link', { name: 'Brands ' }).click();
    await page.locator('div').filter({ hasText: /^test$/ }).nth(1).click();
    await page.locator('div').filter({ hasText: /^test$/ }).first().click();
    await page.getByRole('menuitem', { name: 'See all' }).click();
    await page.getByRole('link', { name: 'test test' }).click();
    await page.getByRole('link', { name: 'test By test test $100' }).click();
    await page.getByRole('button', { name: 'Add To Bag' }).click();
    await page.getByRole('button', { name: 'Proceed To Checkout' }).click();
    await page.getByRole('button', { name: 'Create an account' }).click();
    await page.getByRole('main').getByPlaceholder('Please Enter Your Email').click();
    await page.getByRole('main').getByPlaceholder('Please Enter Your Email').fill(`${Date.now()}qawsed@test.com`);
    await page.getByPlaceholder('Please Enter Your First Name').click();
    await page.getByPlaceholder('Please Enter Your First Name').fill('test');
    await page.getByPlaceholder('Please Enter Your Last Name').click();
    await page.getByPlaceholder('Please Enter Your Last Name').fill('test');
    await page.getByPlaceholder('Please Enter Your Password').click();
    await page.getByPlaceholder('Please Enter Your Password').fill('test123');
    await page.getByRole('button', { name: 'Sign Up' }).click();
    await page.getByRole('link', { name: 'Orders' }).click();
  });


