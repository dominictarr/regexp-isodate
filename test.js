var assert = require('assert')
var d = new Date()
var iso = require('./')
var a = [
  d.toISOString(),
  'foo'+d.toISOString()+'what',
  'bar'+d.toISOString()+'now',
  'head'+d.toISOString()+'.log',
 ]



a.forEach(function (e) {
  assert.equal(d.toISOString(), iso.exec(e)[1])
  console.log(iso.exec(e))
})
