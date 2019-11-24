const keys = require("./keys.js");
const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);
const fs = require("fs")

function songSearch(userInput) {
    var song=userInput;
    if(!song) {
        song="the sign Ace of Base"
    }
spotify
  .search({ type: 'track', query: song})
  .then(function(response) {
    console.log(response);
  })
  .catch(function(err) {
    console.log(err);
  })};

  console.log(response.data.tracks.items[0].name);
  console.log(response.tracks.items[0].artists[0].name);
  console.log(response.tracks.items[0].preview_url);
  console.log(response.tracks.items[0].album.name);

  fs.appendFileSync('log.txt', "\r\n" + "Song Search Log--------------------"+ "\r\n", 'utf8');
  fs.appendFileSync('log.txt', "\r\n" + "Song Name: " + response.tracks.items[0].name + "\r\n", 'utf8');
  fs.appendFileSync('log.txt', "\r\n" + "Artist(s): " + response.tracks.items[0].name + "\r\n", 'utf8');
  fs.appendFileSync('log.txt', "\r\n" + "Album: " + response.tracks.items[0].name + "\r\n", 'utf8');
  fs.appendFileSync('log.txt', "\r\n" + "Preview Link: " + response.tracks.items[0].name + "\r\n", 'utf8');
  fs.appendFileSync('log.txt', "\r\n" + "-----------------------------------"+ "\r\n", 'utf8');

   module.exports = spotify