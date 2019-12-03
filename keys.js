require("dotenv").config();

console.log('Key found');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

exports.bandsintown = {
  id: "codingbootcamp"}
