#!/usr/bin/env node
var Player = require('player')
var ROOT = 'https://download.quranicaudio.com/quran/tawfeeq_bin_saeed-as-sawaaigh'
var argv = require('minimist')(process.argv.slice(2))
var surahs = argv._.filter(function (surah) {
  if (!isNaN(parseInt(surah)) && surah <= 114 && surah >= 1) { return true }
}).map(function (surah) {
  return ROOT + '/' + zeroPad(surah, 3) + '.mp3'
})

var player = new Player(surahs)
player.on('playing', function (item) {
  console.log('-> ', item._name.split('.')[0])
})
player.on('error', function (err) {
  // not yet handled
  console.log(err)
})
player.play()
console.log('Downloading file...')

function zeroPad (num, places) {
  var zero = places - num.toString().length + 1
  return Array(+(zero > 0 && zero)).join('0') + num
}
