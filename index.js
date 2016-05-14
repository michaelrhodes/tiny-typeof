var str = {}.toString

module.exports = function (value) {
  if (value == null) return value + ''

  var _typeof = typeof value
  if (_typeof == 'number' && isNaN(value))
    return 'nan'

  var type = str.call(value).slice(8, -1)
  if (type == 'Arguments' || argish(value))
    return 'arguments'

  type = value.constructor ?
    value.constructor.name || type :
    type

  return type ? type.toLowerCase() : _typeof
}

function argish (value) {
  return typeof value == 'object' &&
    typeof value.callee == 'function'
}
