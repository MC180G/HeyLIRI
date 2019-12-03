// *--------SETTING UP REQUIREMENTS------------------*

require("dotenv").config();
const keys = require("./keys.js");
const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);
const fs = require("fs");
const axios = require("axios");

const userCommand = process.argv[2];
const userInput = process.argv.splice(3, process.argv.length).join(' ');

// *==============LET'S DO THIS==============*

switch (userCommand) {

    case "help":
        console.log("Use any ONE of these commands");
        console.log("=============================");
        console.log("'concert-this' followed by an Artist");
        console.log("'spotify-this-song' followed by a song title");
        console.log("'movie-this' followed by a movie title");
        console.log("'do-what-it-says' using command from random.txt");
        break;


    // *------------------SPOTIFY-----------------*

    case "spotify-this-song":
        console.log("I can Name That Tune!");

        let song = userInput;
        if (!song) {
            song = "the sign Ace of Base"
        }
        spotify
            .search({ type: 'track', query: song })
            .then(function (response) {

                var results = response.tracks.items[0];


                console.log("\n----------------------");
                console.log("Song : " + results.name);
                console.log("By: " + results.artists[0].name);
                console.log("Hear Some @ " + results.preview_url);
                console.log("From the Album - " + results.album.name);
                console.log("----------------------\n")

                fs.appendFileSync('log.txt', "\r\n" + "Song Search Log--------------------" + "\r\n", 'utf8');
                fs.appendFileSync('log.txt', "\r\n" + "Song Name: " + response.tracks.items[0].name + "\r\n", 'utf8');
                fs.appendFileSync('log.txt', "\r\n" + "Artist(s): " + response.tracks.items[0].artists[0].name + "\r\n", 'utf8');
                fs.appendFileSync('log.txt', "\r\n" + "Album: " + response.tracks.items[0].album.name + "\r\n", 'utf8');
                fs.appendFileSync('log.txt', "\r\n" + "Preview Link: " + response.tracks.items[0].preview_url + "\r\n", 'utf8');
                fs.appendFileSync('log.txt', "\r\n" + "-----------------------------------" + "\r\n", 'utf8');
            });
        break;

    // *-----------------MOVIE FACTS-----------------*

    case "movie-this":

        var movie = userInput;
        if (!movie) {
            movie = "Donnie Darko"
        }
        var url = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

        axios.get(url).then(
            function (response) {

                console.log("\n----------------------");
                console.log("Movie Title: " + response.data.Title);
                console.log("Year: " + response.data.Year);
                console.log("IMDb Rating: " + response.data.imdbRating);
                console.log("Country: " + response.data.Country);
                console.log("Language: " + response.data.Language);
                console.log("Plot: " + response.data.Plot);
                console.log("Actors: " + response.data.Actors);
                console.log("---------------------\n");

                fs.appendFileSync('log.txt', "\r\n" + "Movie Search Log----------------" + "\r\n", 'utf8');
                fs.appendFileSync('log.txt', "\r\n" + "Title: " + response.data.Title + "\r\n", 'utf8');
                fs.appendFileSync('log.txt', "\r\n" + "Year: " + response.data.Year + "\r\n", 'utf8');
                fs.appendFileSync('log.txt', "\r\n" + "IMDb Rating: " + response.data.imdbRating + "\r\n", 'utf8');
                fs.appendFileSync('log.txt', "\r\n" + "Country: " + response.data.Country + "\r\n", 'utf8');
                fs.appendFileSync('log.txt', "\r\n" + "Language: " + response.data.Language + "\r\n", 'utf8');
                fs.appendFileSync('log.txt', "\r\n" + "Plot: " + response.data.Plot + "\r\n", 'utf8');
                fs.appendFileSync('log.txt', "\r\n" + "Actors: " + response.data.Actors + "\r\n", 'utf8');
                fs.appendFileSync('log.txt', "\r\n" + "----------------------------------" + "\r\n", 'utf8');
            })
        break;

    // *--------CONCERT CONNECTION----------*
    case "concert-this":

        var artist = userInput;
        if (!artist) {
            artist = "Lizzo"
        }
        var url = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=" + keys.bandsInTown;

        axios.get(url).then(
            function (response) {
                
                console.log("\nLet's go see " + artist + " at -\n");
               
                for (let i = 0; i < response.data.length; i++) {
                    console.log(response.data[i].venue.name);
                    console.log("in " + response.data[i].venue.city + "," + response.data[i].venue.region);
                    console.log("\n------------------\n");
                    fs.appendFileSync('log.txt', "\r\n" + "Concert Search Log for " + artist + "----------------" + "\r\n", 'utf8');
                    fs.appendFileSync('log.txt', "\r\n" + "Venue Name: "  + response.data[i].venue.name + "\r\n", 'utf8');
                    fs.appendFileSync('log.txt', "\r\n" + "Venue Location: "  + response.data[i].venue.city + "," + response.data[i].venue.region + "\r\n", 'utf8');
                    fs.appendFileSync('log.txt', "\r\n" + "-----------------------------------" + "\r\n", 'utf8');
                }
            })
        break;

    case "do-what-it-says":
        fs.readFileSync('random.txt');
        break;
};