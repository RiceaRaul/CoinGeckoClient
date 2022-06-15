class Coins extends RequestClass{
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
                if (!Utils.isString(params['vs_currency']) || Utils.isStingEmpty(params['vs_currency'])) {
                    params.vs_currency = 'usd';
                }
                if (Utils.isArray(params['ids'])) {
                    params.ids = params.ids.join(',');
                }
                 
                return this._request(path,params);
            },
       
            id:(params = {})=>{
                if(!Utils.isObject(params)){
                    return "Invalid parameter params must be of type: Object";
                }
                if (!Utils.isStringEmpty(params['id']) || Utils.isStringEmpty(params['id'])) {
                   return "The id parameter is required";
                }
                const path = `${pathPrefix}/${params["id"]}`;
                delete params["id"];
                return this._request(path,params);
            },
 
            tickers:(params = {})=>{
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

            history:()=>{
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
            },

            marketChart:(params = {})=>{
                if(!Utils.isObject(params)){
                    return "Invalid parameter params must be of type: Object";
                }
                if (!Utils.isString(params['id']) || Utils.isStringEmpty(params['id'])) {
                   return "The id parameter is required";
                }
                if (!params['vs_currency'] || !Utils.isString(params['vs_currency']) || Utils.isStringEmpty(params['vs_currency'])) {
                    params.vs_currency = 'usd';
                }
                if (!params['days'] || !Utils.isString(params['days']) || Utils.isStringEmpty(params['days'])) {
                    params.days = 'usd';
                }
                const path = `${pathPrefix}/${params["id"]}/market_chart`;
                delete params["id"];
                return this._request(path,params);
            },
            marketChartRange:(params = {})=>{
                if(!Utils.isObject(params)){
                    return "Invalid parameter params must be of type: Object";
                }
                if (!Utils.isString(params['id']) || Utils.isStringEmpty(params['id'])) {
                   return "The id parameter is required";
                }
                if (!params['vs_currency'] || !Utils.isString(params['vs_currency']) || Utils.isStringEmpty(params['vs_currency'])) {
                    params.vs_currency = 'usd';
                }
                if (!params['from'] || !Utils.isString(params['from']) || Utils.isStringEmpty(params['from'])) {
                    return "The from parameter is required"
                }
                if (!params['from'] || !Utils.isString(params['from']) || Utils.isStringEmpty(params['from'])) {
                    return "The from parameter is required"
                }
                const path = `${pathPrefix}/${params["id"]}/market_chart/range`;
                delete params["id"];
                return this._request(path,params);
            },
            ohlc:(params = {})=>{
                if(!Utils.isObject(params)){
                    return "Invalid parameter params must be of type: Object";
                }
                if (!Utils.isString(params['id']) || Utils.isStringEmpty(params['id'])) {
                   return "The id parameter is required";
                }
                if (!params['vs_currency'] || !Utils.isString(params['vs_currency']) || Utils.isStringEmpty(params['vs_currency'])) {
                    params.vs_currency = 'usd';
                }
                if (!params['days'] || !Utils.isString(params['days']) || Utils.isStringEmpty(params['days'])) {
                    params.days = 'usd';
                }
                const path = `${pathPrefix}/${params["id"]}/market_chart`;
                delete params["id"];
                return this._request(path,params);
            },


        }
    }
}

module.exports =  Coins;