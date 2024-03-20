import { test, expect } from '@playwright/test';

test.describe('User registration', () => {
    test('Register new user with valid data', async ({page}) => {
      await page.goto('https://sit.quiklyz.com/login');
  
      // Fill in the registration form
      await page.fill('#mat-input-24', 'Shubhangi');
      await page.fill('#mat-input-25', 'Pandey');
      await page.fill('//*[@id="mat-form-field-label-53"]/mat-label', 'shubhangipandey30@gmail.com');
      await page.fill('//*[@id="mat-form-field-label-55"]/mat-label', '8928458330');
      //checkbox
      await page.click('span.mat-checkbox-inner-container');
      // Submit the form
      await page.click('button.mat-button.buttonInActive[aria-label="Edit Record"]');
    });
    
    test('Register new user with invalid data', async ({page}) => {
      await page.goto('https://sit.quiklyz.com/login');
  
      // Fill in the registration form
      await page.fill('#mat-input-24', 'Shubhangi');
      await page.fill('#mat-input-25', 'Pandey');
      await page.fill('//*[@id="mat-form-field-label-53"]/mat-label', 'shubhangipande306@gmail.com');
      await page.fill('//*[@id="mat-form-field-label-55"]/mat-label', '8928458330');
      await page.click('span.mat-checkbox-inner-container');
      // Submit the form
      await page.click('button.mat-button.buttonInActive[aria-label="Edit Record"]');
    });
});
