# CoinGecko API Client for Node.js

<span class="badge-npmversion"><a href="https://npmjs.org/package/coingeckoclient" title="View this project on NPM"><img src="https://img.shields.io/npm/v/coingeckoclient.svg" alt="NPM version"/></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/coingeckoclient" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/coingeckoclient.svg" alt="NPM downloads" /></a></span>
## • Quick Start Example

```
npm install axios
npm install extends-classes
npm install query-string
```
```javascript
//1. Import 
let Geko = require("./lib/geko");

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new Geko();

//3. Make calls
var func = async() => {
  let data = await CoinGeckoClient.ping();
};
```

## • Constants

This module provides helper constants for use in calls.
• To do
## • Making Calls
All calls using the CoinGeckoClient are asynchronous.
Each function receives an object as an argument.<br>
:warning: For more information on features, check out https://www.coingecko.com/en/api/documentation

## • Ping

Check API server status.

Usage Example:
```javascript
  let data = await CoinGeckoClient.ping();
```
<details>
  <summary>Simple Category /simple</summary>
<br>

### Function price
| Argument      | Type | Optional |
| ------------- | ------------- |  ------------- |
| ids  | array  | false|
| vs_currencies  | array  |true|

```javascript
  let params = {
    ids:["btc"],
    vs_currencies:["eur"],
  }
  let data = await CoinGeckoClient.simple.price(params);
```
### Function tokenPrice

| Argument      | Type | Optional |
| ------------- | ------------- |  ------------- |
| id  | path  | false|
| vs_currencies  | array  |true|
| contract_addresses  | array  |false|
```javascript
 let params = {
    id:"ethereum",
    vs_currencies:["eur"],
    contract_addresses:["0xe41d2489571d322189246dafa5ebde1f4699f498"]
  }
  let data = await CoinGeckoClient.simple.price(params);
```

### Function supportedVsCurrencies
```javascript
  let data = await CoinGeckoClient.simple.supportedVsCurrencies();
```
</details>
 
<details>
  <summary>Coins cateogry /coins</summary>
  <br>
  
  ### Function all
  ```javascript
     let data = await CoinGeckoClient.coins.all();
  ```
  ### Function list
  ```javascript
     let data = await CoinGeckoClient.coins.list();
  ```
  ### Function markets
  | Argument      | Type | Optional |
| ------------- | ------------- |  ------------- |
| ids  | array  | false|
| vs_currency  |  string |true|
  ```javascript
     let params = {
        ids:["btc"],
        vs_currencies:"eur"
     }
     let data = await CoinGeckoClient.coins.markets(params);
  ```
  ### Function id
| Argument      | Type | Optional |
| ------------- | ------------- |  ------------- |
| id  | string  | false|

  
  ```javascript
  let params = {
        id:"btc",
   }
   let data = await CoinGeckoClient.coins.markets(params);
  ```
  
  ### Function tickers
| Argument      | Type | Optional |
| ------------- | ------------- |  ------------- |
| id  | string  | false|

  
  ```javascript
  let params = {
        id:"btc",
   }
   let data = await CoinGeckoClient.coins.tickers(params);
  ```
  
  ### Function history
| Argument      | Type | Optional |
| ------------- | ------------- |  ------------- |
| id  | string  | false|
| date | string dd-mm-yyyy| false|
  
  ```javascript
  let params = {
        id:"btc",
        date:"19-12-2022"
   }
   let data = await CoinGeckoClient.coins.date(params);
  ```
  
### Function marketChart
| Argument      | Type | Optional |
| ------------- | ------------- |  ------------- |
| id  | string  | false|
| vs_currencies  | string  |true|
| days | string | false|

```javascript
  let params = {
    id:["btc"],
    vs_currencies:"eur",
    days:"1"
  }
  let data = await CoinGeckoClient.simple.marketChart(params);
```
### Function marketChartRange
| Argument      | Type | Optional |
| ------------- | ------------- |  ------------- |
| id  | string  | false|
| vs_currencies  | string  |true|
| from | string  unix | false|
| to | string  unix | false|

```javascript
  let params = {
    id:["btc"],
    vs_currencies:"eur",
    from:"1392577232",
    to:"1422577232"
  }
  let data = await CoinGeckoClient.simple.marketChartRange(params);
```
  
### Function ohlc
| Argument      | Type | Optional |
| ------------- | ------------- |  ------------- |
| id  | string  | false|
| vs_currencies  | string  |true|
| days | string | false|

```javascript
  let params = {
    id:["btc"],
    vs_currencies:"eur",
    days:"1"
  }
  let data = await CoinGeckoClient.simple.ohlc(params);
```
</details>

#  :warning: Working process.
