import { test, expect } from '@playwright/test';

test('log in', async ({page}) => {
  
  await page.goto('https://uat.quiklyz.com/login');
  //selecting a city

  
  //log in
  await page.click('div.mat-tab-label-content:has-text("Login")');
  await page.getByRole('textbox').fill('8928458320');
  
  await page.click('button.mat-flat-button[type="button"][color="primary"]');
  
  //OTP
  const inputValues = ["1", "2", "3", "4", "5", "6"]; // values to be filled in the textboxes

for (let i = 0; i < inputValues.length; i++) {
  await page.fill(`.otpfield:nth-child(${i+1}) input[type="number"]`, inputValues[i]);
}
  
   //button submit for login
  await page.click('button[type="button"][color="primary"][class="mat-focus-indicator mat-flat-button mat-button-base mat-primary ng-star-inserted"]');
  
  //await page.click("xpath=/html/body/app-root/div/fg-client-app-main-layout/div/fg-client-main-nav/mat-sidenav-container/mat-sidenav-content/div[2]/fg-form/div[2]/div/div/form/div/div[1]/fieldset/div/div[1]/div/fg-custom-container/div/div/div[1]/div/div[1]/div/div/div[2]/div/div[1]/div[2]/div/div[1]/div/fg-custom-container/div/div/div/div/div[1]/div/div/div/div/fg-form-list-page/fg-list/div[2]/div/fg-client-gallery-card-view/div/div[1]/div[4]/div[1]/img");
  await page.pause()   
  //selecting a car
  await page.getByRole('link', { name: 'Maruti Suzuki Baleno' }).click();   
  //checking eligibility
  //await page.click('button[color="primary"][aria-label="Edit Record"][class*="fgbuttonlarge"]');

  //Eligibility Check
  //pan value
  await page.getByLabel('PAN Number ').fill('FROPP2597H');

  //DOB
 
  //selection of date
  //await page.click('button[data-mat-calendar-body-label="February 2000"] [aria-label="February 17, 2000"]');
  //await page.click('.mat-calendar-body-cell-content:text("2000")');//year
  //await page.fill('#mat-input-40','2000');
   //Date picker
  //await page.click('.mat-datepicker-toggle-default-icon'); 
  //await page.click('.mat-calendar-body-cell-content:text("FEB")');//month
  //await page.click('.mat-calendar-body-cell-content:text("17")');//date
  let date = '17/02/2000'
  await page.fill("id=mat-form-field-label-133",date);
  await page.waitForTimeout(30000);   
    

  
  //closing the date picker
  await page.click('.mat-calendar-footer button.mat-calendar-period-button');

  

  //Enable checkbox
  await page.click('mat-checkbox#mat-checkbox-14 input[type="checkbox"]');
  await page.getByLabel('I, hereby authorize Mahindra &amp; Mahindra Financial Services Ltd. to receive Credit Information from Credit bureau for the purpose of evaluating my credit worthiness to subscribe for a vehicle').check();

  //Button
  await page.click('button[aria-label="Edit Record"]');
  
  //additional details
  //select Gender
  await page.click('button.radio-custom');
  //address 
  await page.fill('#mat-input-47','om jai ganesh');
  //pin code
  await page.fill('input[name="RM_PINCODE_97a54ab1-f72a-4d86-8541-3d93f5c9cef3"]','421306');

  //fill city name
  await page.fill('input.mat-input-element#mat-input-49','mumbai');

  //slecting state
  await page.click('mat-select');
  await page.click('mat-option:text("Maharashtra")');

  //submit click button
  await page.click('button.mat-button[aria-label="Edit Record"]');

  //for salaried click buton
  await page.click('button.mat-button[aria-label="Edit Record"][class*="buttonInActive"]');
  //upload 6 month bank statement
  //enable checkbox
  await page.check('#mat-checkbox-6-input');
  //Button to continue
  await page.click('button.mat-tooltip-trigger.check-custom');
  
  




  



  

});


