# coinmarketcap

[![NPM Package](https://img.shields.io/npm/v/coinmarketcap.svg?style=flat-square)](https://www.npmjs.org/package/coinmarketcap)
[![Build Status](https://img.shields.io/travis/ExodusMovement/coinmarketcap.svg?branch=master&style=flat-square)](https://travis-ci.org/ExodusMovement/coinmarketcap)
[![Dependency status](https://img.shields.io/david/ExodusMovement/coinmarketcap.svg?style=flat-square)](https://david-dm.org/ExodusMovement/coinmarketcap#info=dependencies)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## API

Both methods takes coin name (part of URL on coinmarketcap.com for coin).

### `.history(String coinName [, Number interval])` -> `Promise`

Available intervals: 1, 7, 30, 90, 180, 365 or skip this if you want all data.

Return `{cap: {date: Number, value: Number}[], price: {date: Number, value: Number}[]}`

```javascript
let coinmarketcapcom = require('coinmarketcapcom-data')

coinmarketcapcom.history('bitcoin', 365).then(function (data) {
  let maxPrice = data.price[0]
  data.price.forEach(function (price) {
    if (price.value > maxPrice.value) maxPrice = price
  })

  console.log('The higest price at the last year is ' + maxPrice.value + '$ at ' + new Date(maxPrice.date))
})
```

### `.current(String coinName)` -> `Promise`

Return `{cap: Number, price: Number}`

```javascript
let coinmarketcapcom = require('coinmarketcapcom-data')

coinmarketcapcom.current('bitcoin').then(function (data) {
  console.log('Current bitcoin price is: ' + data.price + '$ (capitalization: ' + data.cap + '$)')
})
```
