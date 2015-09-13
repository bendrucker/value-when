'use strict'

var test = require('tape')
var when = require('./')

test(function (t) {
  t.equal(when('foo', 'bar'), 'bar')
  t.equal(when(false, 'bar'), undefined)
  t.end()
})
