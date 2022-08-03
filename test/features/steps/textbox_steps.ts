import { Given, When, Then } from '@wdio/cucumber-framework';

import TextoxPage from '../page/textbox_page';

const pages = {
    textbox: TextoxPage
}

Given(/^I visited the (\w+) page$/, async (page) => {
    await pages[page].open();
});

When('I am filling out {string} into username input', async (username: string) => {
  await TextoxPage.fillOutUsernameInput(username);
  await browser.pause(5000);
});