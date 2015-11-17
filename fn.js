'use strict'

module.exports = function valueWhenFn (condition, value) {
  return condition ? value() : undefined
}
