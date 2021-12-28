let client; 
let restifyClient = require('restify-clients');

function ViacepAPI() {
    client = restifyClient.createJsonClient('https://viacep.com.br');
}

ViacepAPI.prototype.getAddress = (cep, callback) => {
    const options = {
        path: `/ws/${cep}/json/`
    }

    client.get(options, callback);
}

module.exports = () => {
    return ViacepAPI;
};
