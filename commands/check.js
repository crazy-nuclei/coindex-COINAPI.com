import KeyManager from "../lib/KeyManager.js";
import CryptoAPI from "../lib/CryptoAPI.js"

const check = { 
    async price(cmd) {
        try {
            const keyManager = new KeyManager();
            const cryptoAPI = new CryptoAPI(keyManager.getKey());
            const output = await cryptoAPI.getPriceData(cmd.coin, cmd.cur);
            console.log(output);
        } catch (err) {
            console.error(err.message.red);
        }
    }
}

export default check; 