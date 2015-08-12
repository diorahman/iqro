#!/usr/bin/env node
var Player = require('player');
var ROOT = 'http://download.quranicaudio.com/quran/tawfeeq_bin_saeed-as-sawaaigh';
function zeroPad(num, places) {
  var zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join("0") + num;
}
var argv = require('minimist')(process.argv.slice(2));
var surahs = argv._.filter(function(surah) {
  if (parseInt(surah) != NaN && surah <= 114 && surah >= 1)
    return true;
}).map(function(surah) {
  return ROOT + '/' + zeroPad(surah, 3) + '.mp3';
});
console.log(surahs);
var player = new Player(surahs);
player.on('playing', function(item){
  console.log('-> ', item._name.split('.')[0]);
})
player.play();
console.log('Downloading file...');

