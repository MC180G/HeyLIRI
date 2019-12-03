const axios = require("axios");
const fs=require("fs");


function myConcert(userInput) {
    var artist = userInput;
    var url = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=" + keys.bandsInTown;

    axios.get(url).then(
        function (response) {
            for (let i=0; i < response.data.length; i++) {
                console.log("Concert Location: " + response.data[i].venue.city + "," + response.data[i].venue.region);
                console.log("Concert Venue: " + response.data[i.venue.name]);
                console.log("------------------")
                fs.appendFileSync('log.txt', "\r\n" + "Concert Search Log ----------------" + "\r\n", 'utf8');
                fs.appendFileSync('log.txt', "\r\n" + "Venue Name: " + "\r\n", 'utf8');
                fs.appendFileSync('log.txt', "\r\n" + "Venue Location: " + "\r\n", 'utf8');
                fs.appendFileSync('log.txt', "\r\n" + "-----------------------------------" + "\r\n", 'utf8');
            }
        }
    )
}