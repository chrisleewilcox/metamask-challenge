'use strict';
describe('QA Challenge Test', () => {
    const username = 'testvalid@email.com';
    
    beforeAll(async () => {
        await device.launchApp({newInstance: true});//this launches the app
    });
  beforeEach(() => {
    jest.setTimeout(170000);
  });
  it('should confirm we are on the onboarding screen', async () => {
    // Check that we are on the home screen
    await expect(element(by.id('onboarding-screen'))).toBeVisible();
  });
    
    it('should show MetaMask Demo screen title', async () => {
      await expect(element(by.text('MetaMask Demo'))).toBeVisible();
    });
    it('should show Welcome header', async () => {
      await expect(element(by.text('Welcome'))).toBeVisible();
    });
    it('should show Sign Up button', async () => {
      await expect(element(by.text('Sign Up'))).toBeVisible();
    });
    it('should tap Sign Up', async () => {
      await element(by.text('Sign Up')).tap();
    });
    it('should tap Next', async () => {
      await element(by.text('Next')).tap();
    });
    it('should show email required validation error', async () => {
      await expect(element(by.text('You need to enter your email'))).toBeVisible();
    });
    it('should show password required validation error', async () => {
      await expect(element(by.text('You need to enter your password'))).toBeVisible();
    });
    it('should input invalid email', async () => {
      const emailinput = element(by.type('RCTUITextField')).atIndex(0);
      emailinput.typeText('');
      emailinput.typeText('not@#$%^^df@email.com');
        
    });
    it('should input password length less than minimum required', async () => {
      const emailinput = element(by.type('RCTUITextField')).atIndex(1);
      emailinput.typeText('Too!Short0');
    });
    it('should tap Next', async () => {
      await element(by.text('Next')).tap();
    });
    it('should show email validation error', async () => {
      await expect(element(by.text('Email is not correct'))).toBeVisible();
    });
    it('should show password length validation error', async () => {
      await expect(element(by.text('You need to enter your password with more than 11 characters'))).toBeVisible();
    });
    it('should input valid email', async () => {
        const emailinput = await element(by.type('RCTUITextField')).atIndex(0);
        emailinput.text = "";
        emailinput.clear;
        emailinput.typeText(username);
    });
    it('should input valid password', async () => {
        const emailinput = element(by.type('RCTUITextField')).atIndex(1);
        emailinput.text = '';
        emailinput.typeText('ValidPassword');
    });
    it('should tap Next', async () => {
        await element(by.text('Next')).tap();
    });
    it('should show Welcome on new user home screen',() => {
        expect(element(by.text('Welcome')).atIndex(1)).toBeVisible();
    });
    it('should show new user username', async () => {
        await expect(element(by.text(username + '!'))).toBeVisible();
    });
});
