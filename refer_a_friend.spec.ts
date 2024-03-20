import { test, expect } from '@playwright/test';

test('log in', async ({page}) => {
  
  await page.goto('https://uat.quiklyz.com/refer-and-earn');
  //await page.getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await Promise.race([
    page.waitForLoadState('networkidle', { timeout: 30000 }),
    new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout waiting for page load')), 30000))
  ]);
  await page.getByText('I\'m not a robot').check();
  await page.pause()

});