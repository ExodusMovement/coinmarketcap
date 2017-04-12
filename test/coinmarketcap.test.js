import test from 'blue-tape'
global.fetch = require('node-fetch')
import * as coinmarketcap from '../src'

const tickerKeys = [
  'id',
  'name',
  'symbol',
  'rank',
  'price_usd',
  'price_btc',
  '24h_volume_usd',
  'market_cap_usd',
  'available_supply',
  'total_supply',
  'percent_change_1h',
  'percent_change_24h',
  'percent_change_7d',
  'last_updated',
  'price_eur',
  'volume_eur',
  'market_cap_eur'
]

test('ticker()', async t => {
  const data = await coinmarketcap.ticker({
    limit: 5,
    convert: 'eur'
  })
  t.assert(Array.isArray(data), 'data is an array')
  t.is(data.length, 5, 'limit works')
  data.forEach((item, index) => {
    tickerKeys.map(key => item[key])
    .forEach((val, i) => t.is(typeof val, 'string', `data[${index}].${tickerKeys[i]} is a string`))
  })

  t.end()
})

test('tickerByAsset()', async t => {
  const data = await coinmarketcap.tickerByAsset('bitcoin', { convert: 'eur' })
  tickerKeys.map(key => data[key])
  .forEach((val, i) => t.is(typeof val, 'string', `data.${tickerKeys[i]} is a string`))

  t.end()
})

test('global()', async t => {
  const data = await coinmarketcap.global()
  const keys = [
    'total_market_cap_usd',
    'total_24h_volume_usd',
    'bitcoin_percentage_of_market_cap',
    'active_currencies',
    'active_assets',
    'active_markets'
  ]
  keys.map(key => data[key])
  .forEach((val, i) => t.is(typeof val, 'number', `data.${keys[i]} is a number`))

  t.end()
})
