let fetch = require('node-fetch')

let rates
const url = "https://api.coingate.com/v2/rates";
const options = {
    headers: {
        Authorization: "Bearer 8fGbdzeEW6-Hvb-A-BRxiRE95guZY6AdutdWFSUy"
    }
};

fetch(url, options)
    .then( res => res.json() )
    .then( data => rates = data );



module.exports = {
    getData: (req,res) => {
        if(rates !== undefined) {
            let allKeys = Object.keys(rates.merchant)
            let cryptoKeys = []
            let currencyKeys = []
            let breakPoint = allKeys.indexOf('USD')
            allKeys.map((item, i) => {
                i < breakPoint ? cryptoKeys.push(item) : currencyKeys.push(item)
            })

            res.send({
                rates: rates.trader.buy,
                cryptoKeys,
                currencyKeys
            })
        }
    }
}