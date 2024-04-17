import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://mtp-martech-uat.int.vinid.dev/targeting/custom-audience/builder/create');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Access to Martech' }).click();
  const page1 = await page1Promise;
  await page1.getByPlaceholder('Nhập email của bạn').click();
  await page1.getByPlaceholder('Nhập email của bạn').fill('dinh.nguyen2@onemount.com');
  await page1.getByPlaceholder('Nhập mật khẩu').click();
  await page1.getByPlaceholder('Nhập mật khẩu').fill('h');
  await page1.getByPlaceholder('Nhập mật khẩu').click();
  await page1.getByPlaceholder('Nhập mật khẩu').fill('h');
  await page1.getByRole('img').nth(1).click();
});