const querystring = require('query-string');

const axios = require("axios").default;

class Request{

        
    /**
         * _generateLink(path,params = {})
         * 
         * The function takes two parameters, the first is a string, the second is an object. The function
         * returns a string.
         * 
         * The function is called like this:
         * 
         * _generateLink('/path/to/something',{param1: 'value1', param2: 'value2'});
         * 
         * The function returns a string like this:
         * 
         * /path/to/something?param1=value1&param2=value2
         * 
         * The function is called like this:
         * 
         * _generateLink('/path/to/something',{param1: 'value1', param2: 'value2'});
         * 
         * The function returns a string like this:
         * 
         * /path/to/something?param1=value1&param2=value2
         * @param path - The path to the page you want to link to.
         * @param [params] - The parameters to be passed to the URL.
         * @returns A string.
         */
    _generateLink(path,params = {}){
        if(Utils.isObject(params) && Object.keys(params).length > 0){
            params = querystring.stringify(params);
        }
        else{
            params = undefined;
        }
        if(params !== undefined){
            path = `${path}?${params}`;
        }
        return encodeURI(path);
    }

    /**
     * _request() is a function that takes a path and params as arguments and returns a promise.
     * @param path - the path to the API endpoint
     * @param params - {
     * @returns The return value of the function is the result of the axios.get() function.
     */
    _request(path,params){
        path = this._generateLink(`${GEKOAPPI}/${path}`,params);
        return axios.get(path);
    }
}

module.exports = exports = Request;