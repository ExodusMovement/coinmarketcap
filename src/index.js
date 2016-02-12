import fetch from 'isomorphic-fetch'

const intervals = [1, 7, 30, 90, 180, 365]

export async function history (coinName, interval) {
  let endTime = Date.now()
  let startTime = intervals.indexOf(interval) > -1
    ? (endTime - interval * 24 * 60 * 60 * 1000)
    : 1367174841000
  let url = `https://api.coinmarketcap.com/v1/datapoints/${coinName.toLowerCase()}/${startTime}/${endTime}`

  let response = await fetch(url)
  let body = await response.text()
  let data = JSON.parse(body)
  return {
    cap: data.market_cap_by_available_supply.map((x) => { return {date: x[0], value: x[1]} }),
    price: data.price_usd.map((x) => { return {date: x[0], value: x[1]} })
  }
}

export async function current (coinName) {
  let data = await history(coinName, 1)
  return {
    cap: data.cap[data.cap.length - 1].value,
    price: data.price[data.price.length - 1].value
  }
}
