import { Given, When, Then } from '@wdio/cucumber-framework';

import TextoxPage from '../page/textbox_page';

const pages = {
    textbox: TextoxPage
}

Given(/^User visits the (\w+) page$/, async (page) => {
    await pages[page].open();
});

When('User fills out {string} in username field', async (username: string) => {
    await TextoxPage.fillOutUsername(username);
});

When('User fills out {string} in email field', async (email: string) => {
    await TextoxPage.fillOutEmail(email);
});

When('User fills out {string} in current address field', async (currentAdress: string) => {
    await TextoxPage.fillOutCurrentAdress(currentAdress);
});

When('User fills out {string} in permanent address field', async (permanentAdress: string) => {
    await TextoxPage.fillOutPermanentAdress(permanentAdress);
});

When('User clicks on submit button', async () => {
    await TextoxPage.clickSubmitButton();
    await browser.pause(3000);
});

Then((/Text data should be displayed in output area "([^"]*)"$/), async (array) => {
    const myArray = array.split(",");
    for (const el of myArray) {
        expect(TextoxPage.outputArea).toHaveText(el);
    }
});

  

  