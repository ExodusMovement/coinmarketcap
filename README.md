# coinmarketcap

[![NPM Package](https://img.shields.io/npm/v/coinmarketcap.svg?style=flat-square)](https://www.npmjs.org/package/coinmarketcap)
[![Build Status](https://img.shields.io/travis/ExodusMovement/coinmarketcap.svg?branch=master&style=flat-square)](https://travis-ci.org/ExodusMovement/coinmarketcap)
[![Dependency status](https://img.shields.io/david/ExodusMovement/coinmarketcap.svg?style=flat-square)](https://david-dm.org/ExodusMovement/coinmarketcap#info=dependencies)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## API

### `ticker([options])`

Get a list of assets and their info.

- `options` (Object) Optional.
  - `limit` (Number) Only return the top _`limit`_ assets. Default is to get all assets.
  - `convert` (String) Return price, 24h volume, and market cap in terms of another currency.

Returns a promise.

**Example:**
```js
await coinmarketcap.ticker({
  limit: 10,
  convert: 'eur'
})
// [
//     {
//         "id": "bitcoin",
//         "name": "Bitcoin",
//         "symbol": "BTC",
//         "rank": "1",
//         "price_usd": "1030.06",
//         "price_btc": "1.0",
//         "24h_volume_usd": "321117000.0",
//         "market_cap_usd": "16733968488.0",
//         "available_supply": "16245625.0",
//         "total_supply": "16245625.0",
//         "percent_change_1h": "0.52",
//         "percent_change_24h": "-1.01",
//         "percent_change_7d": "-1.77",
//         "last_updated": "1490895549",
//         "price_eur": "960.3403889",
//         "volume_eur": "299382195.855",
//         "market_cap_eur": "15601329830.0"
//     },
//     ... (9 more)
// ]
```

### `tickerByAsset(assetID, [options])`

Get info about a particular asset.

- `assetID` (String) Asset ID (i.e `'bitcoin'`)
- `options` (Object) Optional.
  - `convert` (String) Return price, 24h volume, and market cap in terms of another currency.

Returns a promise.

**Example:**
```js
await coinmarketcap.tickerByAsset('bitcoin', { convert: 'eur' })
// {
//     "id": "bitcoin",
//     "name": "Bitcoin",
//     "symbol": "BTC",
//     "rank": "1",
//     "price_usd": "1030.06",
//     "price_btc": "1.0",
//     "24h_volume_usd": "321117000.0",
//     "market_cap_usd": "16733968488.0",
//     "available_supply": "16245625.0",
//     "total_supply": "16245625.0",
//     "percent_change_1h": "0.52",
//     "percent_change_24h": "-1.01",
//     "percent_change_7d": "-1.77",
//     "last_updated": "1490895549",
//     "price_eur": "960.3403889",
//     "volume_eur": "299382195.855",
//     "market_cap_eur": "15601329830.0"
// }
```

### `global([options])`

Get global info.

- `options` (Object) Optional.
  - `convert` (String) Return 24h volume, and market cap in terms of another currency.

Returns a promise.

**Example:**
```js
await coinmarketcap.ticker()
// {
//     "total_market_cap_usd": 24854674203.0,
//     "total_24h_volume_usd": 694102237.0,
//     "bitcoin_percentage_of_market_cap": 67.33,
//     "active_currencies": 680,
//     "active_assets": 80,
//     "active_markets": 2817
// }
```

## License

MIT
