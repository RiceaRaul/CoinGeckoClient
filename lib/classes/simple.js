class Simple extends RequestClass{
    /**
     * The function is supposed to return an object with three functions, price, tokenPrice and
     * supportedVsCurrencies. 
     * 
     * The price function is supposed to return a promise that resolves to a json object. 
     * 
     * The tokenPrice function is supposed to return a promise that resolves to a json object. 
     * 
     * The supportedVsCurrencies function is supposed to return a promise that resolves to a json
     * object.
     * @returns An object with three properties: price, tokenPrice, and supportedVsCurrencies.
     */
     get simple(){
        const pathPrefix = 'simple';
        return {
            /* A function that takes an object as a parameter, checks if the object is valid, checks if
            the object has the required parameters, checks if the parameters are valid, and then
            returns a promise. */
            price:(params ={})=>{
                const path = pathPrefix + `/price`;
                if(!Utils.isObject(params)){
                    return "Invalid parameter params must be of type: Object";
                }
                if (!params['vs_currencies'] || !Utils.isString(params['vs_currencies']) || Utils.isStringEmpty(params['vs_currencies'])) {
                    params.vs_currencies = 'usd';
                }
                return this._request(path,params);
            },
            /* A function that takes an object as a parameter, checks if the object is valid, checks if
            the object has the required parameters, checks if the parameters are valid, and then
            returns a promise. */
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
                const path = pathPrefix +  `/price/${params["id"]}`;
                params.contract_addresses = params.contract_addresses.join(',');
                params.vs_currencies = params.vs_currencies.join(',');
                return this._request(path,params);
          
            },
           /* A function that returns a promise. */
            supportedVsCurrencies:()=>{
                const path = pathPrefix + "/supported_vs_currencies";
                return this._request(path);
            }
        }
    }
}

module.exports = exports =  Simple;