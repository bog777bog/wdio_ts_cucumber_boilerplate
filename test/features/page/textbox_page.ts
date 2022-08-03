import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

class TextboxPage extends Page {
    public get usernameInput(){
        return $('input#userName');
    }

    public async fillOutUsernameInput(username: string) {
        await this.usernameInput.setValue(username);
    }

    public open() {
        return super.open('text-box');
    }
}

export default new TextboxPage();