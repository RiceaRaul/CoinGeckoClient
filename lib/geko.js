const axios = require("axios").default;

const Utils = require('./helpers/utils');

const querystring = require('querystring');
 
class Geko{
     GEKOAPPI = "https://api.coingecko.com/api/v3";

    async ping(){
        const path = 'ping';
        return this._request(path);
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
                if(!Utils.isString(params["category"])){
                    delete params["category"];
                }
                if(!Utils.isString(params["order"])){
                    delete params["order"];
                }
                if(!Utils.isNumber(params["per_page"])){
                    delete params["per_page"];
                }
                if(!Utils.isNumber(params["page"])){
                    delete params["page"];
                }
                if(!Utils.isBoolean(params["sparkline"])){
                    delete params["page"];
                }
                if(!Utils.isString(params["price_change_percentage"])){
                    delete params["price_change_percentage"];
                }
                
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