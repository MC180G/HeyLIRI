const axios = require("axios");

const fs = require("fs");

const inquirer = require("inquirer");

let command = process.argv[2];

let input = process.argv.slice(3).join(" ");



if (!command) {
    command = "show";
}

if (!input) {
    input = "Lost";
}

// inquirer
//   .prompt([{
//       type: "list",
//       name: "command",
//       message: "What do you want to search for?",
//       choices: ["Show", "Actor"],
//   },
//   {
//       type: "input",
//       name: "input",
//       message: "Type what you want to search for",
//       default: "Lost"
//   }
//   ])
//   .then(answers => {

//       switch (answers.command) {

//           case "Show":
//               searchTV(answers.input);
//               break;

//           case "Actor":
//               searchActor(answers.input);
//               break;

//           default:
//               console.log("Please type show or actor followed by your query");
//               break;

//       }
//   });

switch (command) {

    case "show":
        searchTV(input);
        break;

    case "actor":
        searchActor(input);
        break;

    default:
        console.log("Please type show or actor followed by your query");
        break;

}


function searchActor(actor) {

    let URL = "http://api.tvmaze.com/search/people?q=" + actor;

    axios.get(URL).then(function (response) {

        const data = response.data;

        console.log(`Name: ${data[0].person.name}`)
        console.log(`Birthday: ${data[0].person.birthday}`)
        console.log(`Gender: ${data[0].person.gender}`)
        console.log(`Country: ${data[0].person.country.name}`)
        console.log(`TVMaze URL: ${data[0].person.url}`)

        fs.appendFile("log.txt", "Name: " + data[0].person.name + "\nBirthday: " + data[0].person.birthday + "\nGender: " + data[0].person.gender + "\nCountry: " + data[0].person.country.name + "\nTVMaze URL: " + data[0].person.url + "\n\n", function (err) {
            if (err) {
                throw err;
            }
        })
    }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log("Error", error.message);
        }
        console.log(error.config);
    })

}

function searchTV(show) {

    let URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;

    axios.get(URL).then(function (response) {

        const data = response.data;

        console.log(`Name: ${data.name}`);
        console.log(`Genre(s): ${data.genres.join(", ")}`);
        console.log(`Rating: ${data.rating.average}`);
        console.log(`Network: ${data.network.name}`);
        console.log(`Summary: ${data.summary}`);

        fs.appendFile("log.txt", "Name: " + data.name + "\nGenre(s): " + data.genres.join(", ") + "\nRating: " + data.rating.average + "\nNetwork: " + data.network.name + "\nSummary: " + data.summary + "\n\n", function (err) {
            if (err) {
                throw err;
            }
        })
    }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log("Error", error.message);
        }
        console.log(error.config);
    });

}