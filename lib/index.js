'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.global = exports.tickerByAsset = exports.ticker = undefined;

/* global fetch */

let ticker = exports.ticker = (() => {
  var _ref = _asyncToGenerator(function* (opts) {
    const query = querystring.stringify(opts);
    const res = yield fetch(`https://api.coinmarketcap.com/v1/ticker/?${query}`);
    return res.json();
  });

  return function ticker(_x) {
    return _ref.apply(this, arguments);
  };
})();

let tickerByAsset = exports.tickerByAsset = (() => {
  var _ref2 = _asyncToGenerator(function* (asset, opts) {
    const query = querystring.stringify(opts);
    const res = yield fetch(`https://api.coinmarketcap.com/v1/ticker/${asset}/?${query}`);
    const [data] = yield res.json();
    return data;
  });

  return function tickerByAsset(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
})();

let global = exports.global = (() => {
  var _ref3 = _asyncToGenerator(function* (opts) {
    const query = querystring.stringify(opts);
    const res = yield fetch(`https://api.coinmarketcap.com/v1/global/?${query}`);
    return res.json();
  });

  return function global(_x4) {
    return _ref3.apply(this, arguments);
  };
})();

var _querystring = require('querystring');

var querystring = _interopRequireWildcard(_querystring);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }