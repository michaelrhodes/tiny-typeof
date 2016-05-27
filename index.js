var str = {}.toString

module.exports = function (value) {
  if (value == null) return value + ''

  var tof = typeof value
  if (tof == 'number' && isNaN(value))
    return 'nan'

  var type = str.call(value).slice(8, -1)
  if (type == 'Arguments' || tof == 'object' &&
    typeof value.callee == 'function') {
    return 'arguments'
  }

  type = value.constructor ?
    value.constructor.name || type :
    type

  return !type ? tof : type.toLowerCase()
    .replace(/^html(.+)element$/, '$1')
}
