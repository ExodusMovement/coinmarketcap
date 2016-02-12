import fetch from 'isomorphic-fetch'

;(async function () {
  let coins = {}

  let response = await fetch('http://www.coincap.io/map')
  let body = await response.text()
  for (let coin of JSON.parse(body)) {
    coins[coin.name.toLowerCase()] = coin.symbol
  }

  console.log(JSON.stringify(coins, null, 2))
})().catch(function (err) { console.error(err.stack) })
