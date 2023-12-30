import axios from 'axios';
import colors from 'colors';
import { handleErrors } from '../utils/apiError.js';

class CryptoApi {
    constructor(apiKey){
        this.apiKey = apiKey,
        this.baseUrl = 'https://rest.coinapi.io/v1/exchangerate'
    }

    async getPriceData(coinOption, currOption){
        try {
            const headers = {
                'X-CoinAPI-Key': this.apiKey,
                'Accept': 'text/plain'
            }

            const formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: currOption
            });

            const res = await axios.get(
                `${this.baseUrl}/${coinOption}/${currOption}`,
                { headers: headers }
            );

            let output = ''
            output += `Coin: ${res.data.asset_id_base.yellow} Price: ${formatter.format(res.data.rate).green}`;
            
            return output;

        } catch (err) {
            handleErrors(err);
        }
    }
}

export default CryptoApi;