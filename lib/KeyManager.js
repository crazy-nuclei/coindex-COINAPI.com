import Configstore from 'configstore';
import {pkg} from '../utils/pkg.js';

class KeyManager { 
    constructor() {
        this.config = new Configstore(pkg.name);
    }

    setKey(key) {
        this.config.set('apiKey', key);
        return key; 
    }

    getKey() {
        const key = this.config.get('apiKey');

        if (!key) {
            throw new Error("No api key found! , Get a key at https://cryptocointracker.com/")
        }

        return key;
    }

    removeKey() {
        const key = this.config.get('apiKey');

        if (!key) {
            throw new Error("No api key found! , Get a key at https://cryptocointracker.com/")
        }

        this.config.delete('apiKey')
    }
}

export default KeyManager;