import {ChainablePromiseElement} from 'webdriverio';

import Page from './page';

class TextboxPage extends Page {
  public get usernameInput() {
    return $('input#userName');
  }

  public get emailInput() {
    return $('input#userEmail');
  }

  public get currentAdressTextarea() {
    return $('textarea#currentAddress');
  }

  public get permanentAdressTextarea() {
    return $('textarea#permanentAddress');
  }

  public get outputArea() {
    return $('#output');
  }

  // methods

  public async fillOutUsername(username) {
    await this.usernameInput.setValue(username);
  }

  public async fillOutEmail(email) {
    await this.emailInput.setValue(email);
  }

  public async fillOutCurrentAdress(email) {
    await this.currentAdressTextarea.setValue(email);
  }

  public async fillOutPermanentAdress(permanentAdress) {
    await this.permanentAdressTextarea.setValue(permanentAdress);
  }

  public open() {
    return super.open('text-box');
  }
}

export default new TextboxPage();
