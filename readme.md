# tiny-typeof

a small and robust `typeof` implementation

[![Build status](https://travis-ci.org/michaelrhodes/tiny-typeof.svg?branch=master)](https://travis-ci.org/michaelrhodes/tiny-typeof)

## Install
```sh
$ npm install tiny-typeof
```

### Example
``` js
var t = require('tiny-typeof')

t(false)
> 'boolean'

t('a')
> 'string'

t(0)
> 'number'

t({})
> 'object'

t([])
> 'array'

t(function (){})
> 'function'

t(null)
> 'null'

t(void 0)
> 'undefined'

t(Number('-'))
> 'nan'

t(new Date)
> 'date'

t(/asdf/)
> 'regexp'

t(arguments)
> 'arguments'

t(new CustomType)
> 'customtype'
```

### License
[MIT](http://opensource.org/licenses/MIT)
