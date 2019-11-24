require("dotenv").config();
const fs=require("fs");
const mySpotify=require("./spotify.js");
const myMovies=require("./movies.js");
const myConcerts=require("./concerts.js")

const userCommand=process.argv[2];

const userInput=process.argv.splice(3,process.argv.length).join(' ');


switch(userCommand) {

  case "help":
  console.log("Use any ONE of these commands");
  console.log("'concert-this' followed by an Artist");
  console.log("'spotify-this-song' followed by a song title");
  console.log("'movie-this' followed by a movie title");
  console.log("'do-what-it-says' using command from random.txt");
  break;

  case "spotify-this-song":
  mySpotify

  case "movie-this":
  myMovies

  case "concert-this":
  myConcerts

  case "do-what-it-says":
  (random.txt)

}

