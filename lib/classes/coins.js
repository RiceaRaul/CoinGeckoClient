const Request = require("./request");

class Coins extends Request{
    /**
     * "The function returns an object with functions that return a promise that resolves to the data
     * returned by the API."
     * 
     * The function is called "coins" and it returns an object with functions that return a promise
     * that resolves to the data returned by the API.
     * 
     * The function "coins" is called by the function "get" which is a property of the class
     * "CoinMarketCap".
     * 
     * The function "get" is called by the function "coins" which is a property of the class
     * "CoinMarketCap".
     * 
     * The function "coins" is called by the function "get" which is a property of the class
     * "CoinMarketCap".
     * 
     * The function "get" is called by the function "coins" which is a property of the class
     * "CoinMarketCap".
     * 
     * The function "coins" is called by the function "get" which is a property of the class "
     * @returns An object with functions.
     */
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
                if (!Utils.isStringEmpty(params['vs_currency']) || Utils.isStingEmpty(params['vs_currency'])) {
                    params.vs_currency = 'usd';
                }
                if (Utils.isArray(params['ids'])) {
                    params.ids = params.ids.join(',');
                }
                 
                return this._request(path,params);
            },
            /* A function that takes an object as a parameter, checks if the object is valid, checks if
            the object has the required parameters, checks if the parameters are valid, and then
            returns a promise. */
            id(params = {}){
                if(!Utils.isObject(params)){
                    return "Invalid parameter params must be of type: Object";
                }
                if (!Utils.isStringEmpty(params['id']) || Utils.isStringEmptyEmpty(params['id'])) {
                   return "The id parameter is required";
                }
                const path = `${pathPrefix}/${params["id"]}`;
                delete params["id"];
                return this._request(path,params);
            },
            /* A function that takes an object as a parameter, checks if the object is valid, checks if
            the object has the required parameters, checks if the parameters are valid, and
            then returns a promise.
            @returns a promise.
            */
            tickers(params = {}){
                if(!Utils.isObject(params)){
                    return "Invalid parameter params must be of type: Object";
                }
                if (!Utils.isStringEmpty(params['id']) || Utils.isStringEmptyEmpty(params['id'])) {
                   return "The id parameter is required";
                }
                const path = `${pathPrefix}/${params["id"]}/tickers`;
                delete params["id"];
                return this._request(path,params);
            },
           /**
            * The function takes an object as a parameter, checks if the object is valid, checks if the
            * object has the required parameters, checks if the parameters are valid, and then returns
            * a promise.
            * @returns a promise.
            */
            history(){
                if(!Utils.isObject(params)){
                    return "Invalid parameter params must be of type: Object";
                }
                if (!Utils.isStringEmpty(params['id']) || Utils.isStringEmptyEmpty(params['id'])) {
                   return "The id parameter is required";
                }
                if (!Utils.isStringEmpty(params['date']) || Utils.isStringEmptyEmpty(params['date'])) {
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
}

module.exports =  Coins;