import test from 'blue-tape'
import * as coincapio from '../src'

test('get history for [1, 7, 30, 90, 180, 365] days and all time', async function (t) {
  let intervals = [1, 7, 30, 90, 180, 365, null]
  for (let interval of intervals) {
    let data = await coincapio.history('bitcoin', interval)
    t.ok(data, 'return something')
    t.ok(data.cap instanceof Array, 'cap is array')
    t.ok(data.price instanceof Array, 'price is array')
    t.ok(data.cap.length === data.price.length, 'cap have same length as price')
    if (interval === null) continue

    var period = data.cap[data.cap.length - 1].date - data.cap[0].date
    var days = Math.round(period / 1000 / 60 / 60 / 24)
    t.is(interval, days, 'same interval')
  }
})

test('get current price and cap', async function (t) {
  let data = await coincapio.current('bitcoin')
  t.ok(data, 'return something')
  t.ok(data.cap, 'include cap')
  t.ok(data.price, 'include price')

  let count = data.cap / data.price
  let rounded = Math.floor(count)
  t.ok(count - rounded < 1e3, 'coins count almost int')
  t.ok(rounded > 15 * 1e6 && rounded < 21 * 1e6, 'right coins count')
})
