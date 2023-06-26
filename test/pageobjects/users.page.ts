import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.js';


class UsersPage extends Page {
   get jsonText() {
    return $('// pre');
   }
}

export default new UsersPage();
