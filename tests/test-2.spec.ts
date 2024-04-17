import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://tcb-loyalty-ops-qc.vinid.dev/login');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Đăng nhập' }).click();
  const page1 = await page1Promise;
});