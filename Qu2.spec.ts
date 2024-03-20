import { test, expect } from '@playwright/test';

test.describe('User registration', () => {
    test('Register new user with valid data', async ({page}) => {
      await page.goto('https://sit.quiklyz.com/login');
  
      // Fill in the registration form
      await page.fill('#mat-input-24', 'Shubhangi');
      await page.fill('#mat-input-25', 'Pandey');
      await page.fill('//*[@id="mat-form-field-label-53"]/mat-label', 'shubhangipandey813@gmail.com');
      await page.fill('//*[@id="mat-form-field-label-55"]/mat-label', '8928458322');
      await page.click('span.mat-checkbox-inner-container');
  
      // Submit the form
      await page.click('button.mat-button.buttonInActive[aria-label="Edit Record"]');
      //OTP sent 
      await page.fill('//*[@id="main-content-wrapper"]/fg-client-main-nav/mat-sidenav-container/mat-sidenav-content/div[2]/fg-form/div[2]/div/div/form/div/div[1]/fieldset/div/div[1]/div/fg-custom-container/div/div/div/div/div[1]/div[2]/div/div[3]/div/fg-custom-container/div/div/div/div/fg-card/div/mat-card/mat-card-content/div/div[2]/div/div[1]/div/div/div/div/fg-custom-container/div/div/div/div/fg-client-otp-field/form/div[1]/div[2]/div/div/div[1]/input','1');
      await page.fill('//*[@id="main-content-wrapper"]/fg-client-main-nav/mat-sidenav-container/mat-sidenav-content/div[2]/fg-form/div[2]/div/div/form/div/div[1]/fieldset/div/div[1]/div/fg-custom-container/div/div/div/div/div[1]/div[2]/div/div[3]/div/fg-custom-container/div/div/div/div/fg-card/div/mat-card/mat-card-content/div/div[2]/div/div[1]/div/div/div/div/fg-custom-container/div/div/div/div/fg-client-otp-field/form/div[1]/div[2]/div/div/div[2]/input','2');
      await page.fill('//*[@id="main-content-wrapper"]/fg-client-main-nav/mat-sidenav-container/mat-sidenav-content/div[2]/fg-form/div[2]/div/div/form/div/div[1]/fieldset/div/div[1]/div/fg-custom-container/div/div/div/div/div[1]/div[2]/div/div[3]/div/fg-custom-container/div/div/div/div/fg-card/div/mat-card/mat-card-content/div/div[2]/div/div[1]/div/div/div/div/fg-custom-container/div/div/div/div/fg-client-otp-field/form/div[1]/div[2]/div/div/div[3]/input','3');
      await page.fill('//*[@id="main-content-wrapper"]/fg-client-main-nav/mat-sidenav-container/mat-sidenav-content/div[2]/fg-form/div[2]/div/div/form/div/div[1]/fieldset/div/div[1]/div/fg-custom-container/div/div/div/div/div[1]/div[2]/div/div[3]/div/fg-custom-container/div/div/div/div/fg-card/div/mat-card/mat-card-content/div/div[2]/div/div[1]/div/div/div/div/fg-custom-container/div/div/div/div/fg-client-otp-field/form/div[1]/div[2]/div/div/div[4]/input','4');
      await page.fill('//*[@id="main-content-wrapper"]/fg-client-main-nav/mat-sidenav-container/mat-sidenav-content/div[2]/fg-form/div[2]/div/div/form/div/div[1]/fieldset/div/div[1]/div/fg-custom-container/div/div/div/div/div[1]/div[2]/div/div[3]/div/fg-custom-container/div/div/div/div/fg-card/div/mat-card/mat-card-content/div/div[2]/div/div[1]/div/div/div/div/fg-custom-container/div/div/div/div/fg-client-otp-field/form/div[1]/div[2]/div/div/div[5]/input','5');
      await page.fill('//*[@id="main-content-wrapper"]/fg-client-main-nav/mat-sidenav-container/mat-sidenav-content/div[2]/fg-form/div[2]/div/div/form/div/div[1]/fieldset/div/div[1]/div/fg-custom-container/div/div/div/div/div[1]/div[2]/div/div[3]/div/fg-custom-container/div/div/div/div/fg-card/div/mat-card/mat-card-content/div/div[2]/div/div[1]/div/div/div/div/fg-custom-container/div/div/div/div/fg-client-otp-field/form/div[1]/div[2]/div/div/div[6]/input','6');
      
      await page.click('//*[@id="toolbar-menu"]/span/span/span[1]/span/span/a/span[1]');
      await page.click('//*[@id="main-content-wrapper"]/fg-client-main-nav/mat-sidenav-container/mat-sidenav-content/div[2]/fg-form/div[2]/div/div/form/div/div[1]/fieldset/div/div[1]/div/fg-custom-container/div/div/div[1]/div/div[1]/div/div/div[2]/div/div[1]/div[1]/div/div[2]/div/fg-custom-container/div/div/div/div/fg-card/div/mat-card/mat-card-content/div/div/div/div[1]/div/div/div/div/fg-faceted-container/div/form/div[4]/div[2]/div/div[1]/label/span');   
      await page.click('//*[@id="main-content-wrapper"]/fg-client-main-nav/mat-sidenav-container/mat-sidenav-content/div[2]/fg-form/div[2]/div/div/form/div/div[1]/fieldset/div/div[1]/div/fg-custom-container/div/div/div[1]/div/div[1]/div/div/div[2]/div/div[1]/div[2]/div/div[1]/div/fg-custom-container/div/div/div/div/div[1]/div/div/div/div/fg-form-list-page/fg-list/div[2]/div/fg-client-gallery-card-view/div/div[1]/div/div[2]/div[2]/div[2]/span[1]/i[2]');
     // adding to wishlist

      await page.click('//*[@id="main-content-wrapper"]/fg-client-main-nav/mat-sidenav-container/mat-sidenav-content/div[2]/fg-form/div[2]/div/div/form/div/div[1]/fieldset/div/div[1]/div/fg-custom-container/div/div/div[1]/div/div[1]/div/div/div[2]/div/div[1]/div[2]/div/div[1]/div/fg-custom-container/div/div/div/div/div[1]/div/div/div/div/fg-form-list-page/fg-list/div[2]/div/fg-client-gallery-card-view/div/div[1]/div/div[2]/div[2]/div[2]/span[1]/i[2]')
});


});