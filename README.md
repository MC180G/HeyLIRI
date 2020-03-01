# liri-node-app
Matt Colson

The purpose of this Language Interpretation and Recognition Interface is to retrieve data about songs, concerts, and movies.

Using the appropriate API's, each call retrieves an array of data about whatever subject the user types in.

The user will begin by typing **node**, then refer to the file **liri-bot.js**, followed by one of the following.

The [concert-this] function folowed by an **artists name** will reveal all the *places* they are scheduled to appear.

The [movie-this] function followed by a **movie title** will bring forth an array of pertenant data for said movie, such as 
*Year, Country, Language, Actors, Plot, and a little IMDb Rating* for good measure.

[spotify-this-song] will drop the *artist, album, and a preview url* for the **song title** written.

Finally, when one types simply [do-what-it-says], *it* will be the random.txt file, which can be changed by the user to reflect any of the 
previous commands.

If these are difficult to convey, I've included a [help] function that will display *each command* and *how to use them*.

Used:
Node - FrontEnd

APIs-
Spotify
OMDb
bandsintown