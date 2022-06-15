const Many = require("extends-classes");

const Utils = require('./helpers/utils');

const Simple = require('./classes/simple');
const Coins = require('./classes/coins');

class Geko extends Many(Simple,Coins){

   /**
    * It returns a promise that resolves to the result of a request to the server.
    * @returns The return value of the _request function.
    */
    async ping(){
        const path = 'ping';
        return this._request(path);
    }
    
}

module.exports = exports =  Geko;