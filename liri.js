require("dotenv").config();

const mySpotify=require("./spotify.js");
const myMovies=require("./movies.js");
const myConcerts=require("./concerts.js")
const rndmTxt=require("./random.txt")

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
  mySpotify(appSearch)
  break;
  
  case "movie-this":
  myMovies(appSearch)
  break;

  case "concert-this":
  myConcerts(appSearch)
  break;

  case "do-what-it-says":
  rndmTxt(appSearch)
  break;

}
