# value-when [![Build Status](https://travis-ci.org/bendrucker/value-when.svg?branch=master)](https://travis-ci.org/bendrucker/value-when)

> Return a value when a condition passes, otherwise return undefined


## Install

```
$ npm install --save value-when
```


## Usage

```js
var when = require('value-when')

when(true, 'value')
//=> 'value'

when(false, 'value')
//=> undefined
```

## API

#### `when(condition, value)` -> `value` / `undefined`

##### condition

*Required*  
Type: `any`

A value to check for truthiness/falsiness.

##### value

Type: `any`

A value to return when the condition passes.


## License

MIT © [Ben Drucker](http://bendrucker.me)
