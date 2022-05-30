const axios = require("axios").default;

const Utils = require('./helpers/utils');

const querystring = require('querystring');
 
class Geko{
     GEKOAPPI = "https://api.coingecko.com/api/v3";

    async ping(){
        const path = 'ping';
        return this._request(path);
    }

    get simple(){
        const pathPrefix = 'simple';
        return {
            price:(params ={})=>{
                const path = `${pathPrefix}/price`;
                if(!Utils.isObject(params)){
                    return "Invalid parameter params must be of type: Object";
                }
                if (!Utils.isString(params['vs_currency']) || Utils.isStringEmpty(params['vs_currency'])) {
                    params.vs_currency = 'usd';
                }
                return this._request(path,params);
            },
            tokenPrice(params={}){
                if(!Utils.isObject(params)){
                    return "Invalid parameter params must be of type: Object";
                }
                if (!Utils.isString(params['id']) || Utils.isStringEmpty(params['id'])) {
                   return "The id parameter is required";
                }
                if (!Utils.isArray(params['contract_addresses'])) {
                    return "The contract_addresses parameter is required to by array";
                 }
                 if (!Utils.isArray(params['vs_currencies '])) {
                    return "The id parameter is required to by array";
                 }
                const path = `${pathPrefix}/price/${params["id"]}`;
                params.contract_addresses = params.contract_addresses.join(',');
                params.vs_currencies = params.vs_currencies.join(',');
                return this._request(path,params);
          
            },
            supportedVsCurrencies:()=>{
                const path = `${pathPrefix}​/simple​/supported_vs_currencies`;
                return this._request(path);
            }
        }
    }

    get coins(){
        const pathPrefix = 'coins';

        return {
            all:()=>{
                const path = `${pathPrefix}`;
                return this._request(path);
            },
            list:()=>{
                const path = `${pathPrefix}/list`;
                return this._request(path);
            },
            markets:(params = {})=>{
                const path = `/${pathPrefix}/markets`;
                if(!Utils.isObject(params)){
                    return "Invalid parameter params must be of type: Object";
                }
                if (!Utils.isString(params['vs_currency']) || Utils.isStringEmpty(params['vs_currency'])) {
                    params.vs_currency = 'usd';
                }
                if (Utils.isArray(params['ids'])) {
                    params.ids = params.ids.join(',');
                }
                 
                return this._request(path,params);
            },
            id(params = {}){
                if(!Utils.isObject(params)){
                    return "Invalid parameter params must be of type: Object";
                }
                if (!Utils.isString(params['id']) || Utils.isStringEmpty(params['id'])) {
                   return "The id parameter is required";
                }
                const path = `${pathPrefix}/${params["id"]}`;
                delete params["id"];
                return this._request(path,params);
            },
            tickers(params = {}){
                if(!Utils.isObject(params)){
                    return "Invalid parameter params must be of type: Object";
                }
                if (!Utils.isString(params['id']) || Utils.isStringEmpty(params['id'])) {
                   return "The id parameter is required";
                }
                const path = `${pathPrefix}/${params["id"]}/tickers`;
                delete params["id"];
                return this._request(path,params);
            },
            history(){
                if(!Utils.isObject(params)){
                    return "Invalid parameter params must be of type: Object";
                }
                if (!Utils.isString(params['id']) || Utils.isStringEmpty(params['id'])) {
                   return "The id parameter is required";
                }
                if (!Utils.isString(params['date']) || Utils.isStringEmpty(params['date'])) {
                    return "The date parameter is required";
                }
                const regex = '/^[0-9][0-9]-[0-9][0-9]-[0-9][0-9][0-9]/';
                const okDate = regex.exec(params["date"]);
                if(!okDate){
                    return "The date must be dd-mm-yyyy";
                }
                const path = `${pathPrefix}/${params["id"]}/history`;
                delete params["id"];
                return this._request(path,params);
            }

        }
    }

    _generateLink(path,params = {}){
        if(Utils.isObject(params)){
            params = querystring.stringify(params);
        }
        else{
            params = undefined;
        }
        if(params !== undefined){
            path = `${path}?${params}`;
        }
        return path;

    }

    _request(path,params){
        path = this._generateLink(path,params);
        return axios.get(`${this.GEKOAPPI}/${path}`)
    }
}

module.exports = exports =  Geko;