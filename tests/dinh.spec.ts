import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {
  await page.goto('https://tcb-loyalty-ops-qc.vinid.dev/login');
  await page.locator('div').filter({ hasText: /^Tài khoảnTên đăng nhập & mật khẩu$/ }).nth(1).click();
  await page.getByRole('button', { name: 'Đăng nhập' }).click();
  await page.getByPlaceholder('Tài khoản').fill('abc');
  await expect(page.getByPlaceholder('Tài khoản')).toHaveValue('abcxxx');
  // await page.screenshot({path: './test-results/screenshot.png', fullPage:true});
  page.close;


});