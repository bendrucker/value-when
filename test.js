'use strict'

var test = require('tape')
var when = require('./')
var whenFn = require('./fn')

test(function (t) {
  t.equal(when('foo', 'bar'), 'bar')
  t.equal(when(false, 'bar'), undefined)
  t.end()
})

test('fn', function (t) {
  t.equal(whenFn('foo', function () {
    return 'bar'
  }), 'bar')
  t.equal(whenFn(false, function () {
    return 'bar'
  }), undefined)
  t.end()
})
