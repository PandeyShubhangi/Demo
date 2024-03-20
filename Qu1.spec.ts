import { test, expect } from '@playwright/test';

test('log in', async ({page}) => {
  await page.goto('https://sit.quiklyz.com/login');
  //selecting a city

  
  //log in
  //await page.click('//*[@id="toolbar-options"]/fg-client-logout-button/div/div/button/span[1]/span[1]');
  //await page.click('//*[@id="mat-menu-panel-1"]/div/div/button[1]/span');
  await page.locator('xpath=/html/body/app-root/div/fg-client-app-main-layout/div/fg-client-main-nav/mat-sidenav-container/mat-sidenav-content/div[2]/fg-form/div[2]/div/div/form/div/div[1]/fieldset/div/div[1]/div/fg-custom-container/div/div/div/div/div[1]/div[2]/div/div[1]/div/fg-custom-container/div/div/div/div/fg-card/div/mat-card/mat-card-content/div/div[2]/div/fg-tabs/mat-tab-group/mat-tab-header/div/div/div/div[2]').click();
  await page.getByRole('textbox').fill('8928458320');

  await page.locator('xpath=/html/body/app-root/div/fg-client-app-main-layout/div/fg-client-main-nav/mat-sidenav-container/mat-sidenav-content/div[2]/fg-form/div[2]/div/div/form/div/div[1]/fieldset/div/div[1]/div/fg-custom-container/div/div/div/div/div[1]/div[2]/div/div[1]/div/fg-custom-container/div/div/div/div/fg-card/div/mat-card/mat-card-content/div/div[2]/div/fg-tabs/mat-tab-group/div/mat-tab-body[2]/div/div[2]/div[1]/div/div[1]/div/div/div/div/fg-client-login-container/div/form/div[2]/div/button/span[1]').click();

  await page.fill('//*[@id="main-content-wrapper"]/fg-client-main-nav/mat-sidenav-container/mat-sidenav-content/div[2]/fg-form/div[2]/div/div/form/div/div[1]/fieldset/div/div[1]/div/fg-custom-container/div/div/div/div/div[1]/div[2]/div/div[2]/div/fg-custom-container/div/div/div/div/fg-card/div/mat-card/mat-card-content/div/div[2]/div/div[1]/div/div/div/div/fg-custom-container/div/div/div/div/fg-client-otp-field/form/div[1]/div[2]/div/div/div[1]/input','1');
  await page.fill('//*[@id="main-content-wrapper"]/fg-client-main-nav/mat-sidenav-container/mat-sidenav-content/div[2]/fg-form/div[2]/div/div/form/div/div[1]/fieldset/div/div[1]/div/fg-custom-container/div/div/div/div/div[1]/div[2]/div/div[2]/div/fg-custom-container/div/div/div/div/fg-card/div/mat-card/mat-card-content/div/div[2]/div/div[1]/div/div/div/div/fg-custom-container/div/div/div/div/fg-client-otp-field/form/div[1]/div[2]/div/div/div[2]/input','2');
  await page.fill('//*[@id="main-content-wrapper"]/fg-client-main-nav/mat-sidenav-container/mat-sidenav-content/div[2]/fg-form/div[2]/div/div/form/div/div[1]/fieldset/div/div[1]/div/fg-custom-container/div/div/div/div/div[1]/div[2]/div/div[2]/div/fg-custom-container/div/div/div/div/fg-card/div/mat-card/mat-card-content/div/div[2]/div/div[1]/div/div/div/div/fg-custom-container/div/div/div/div/fg-client-otp-field/form/div[1]/div[2]/div/div/div[3]/input','3');
  await page.fill('//*[@id="main-content-wrapper"]/fg-client-main-nav/mat-sidenav-container/mat-sidenav-content/div[2]/fg-form/div[2]/div/div/form/div/div[1]/fieldset/div/div[1]/div/fg-custom-container/div/div/div/div/div[1]/div[2]/div/div[2]/div/fg-custom-container/div/div/div/div/fg-card/div/mat-card/mat-card-content/div/div[2]/div/div[1]/div/div/div/div/fg-custom-container/div/div/div/div/fg-client-otp-field/form/div[1]/div[2]/div/div/div[4]/input','4');
  await page.fill('//*[@id="main-content-wrapper"]/fg-client-main-nav/mat-sidenav-container/mat-sidenav-content/div[2]/fg-form/div[2]/div/div/form/div/div[1]/fieldset/div/div[1]/div/fg-custom-container/div/div/div/div/div[1]/div[2]/div/div[2]/div/fg-custom-container/div/div/div/div/fg-card/div/mat-card/mat-card-content/div/div[2]/div/div[1]/div/div/div/div/fg-custom-container/div/div/div/div/fg-client-otp-field/form/div[1]/div[2]/div/div/div[5]/input','5');
  await page.fill('//*[@id="main-content-wrapper"]/fg-client-main-nav/mat-sidenav-container/mat-sidenav-content/div[2]/fg-form/div[2]/div/div/form/div/div[1]/fieldset/div/div[1]/div/fg-custom-container/div/div/div/div/div[1]/div[2]/div/div[2]/div/fg-custom-container/div/div/div/div/fg-card/div/mat-card/mat-card-content/div/div[2]/div/div[1]/div/div/div/div/fg-custom-container/div/div/div/div/fg-client-otp-field/form/div[1]/div[2]/div/div/div[6]/input','6');
  
  await page.locator('xpath=/html/body/app-root/div/fg-client-app-main-layout/div/fg-client-main-nav/mat-sidenav-container/mat-sidenav-content/div[2]/fg-form/div[2]/div/div/form/div/div[1]/fieldset/div/div[1]/div/fg-custom-container/div/div/div/div/div[1]/div[2]/div/div[2]/div/fg-custom-container/div/div/div/div/fg-card/div/mat-card/mat-card-content/div/div[2]/div/div[1]/div/div/div/div/fg-custom-container/div/div/div/div/fg-client-otp-field/form/div[2]/div/button').click();


});

