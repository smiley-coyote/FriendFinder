var movieData = require('../data/movies.js');
var movie;
var movieMatch;
var request = require("request");
var movieResponse = {
   title: "",
   poster: "",
   plot: "",
   score: ""
}



module.exports = function (app) {
   app.get('/api/movies', function (req, res) {
      res.json(movieData);
   })
   app.get('/api/your-movie', function (req, res) {
      res.json(movieResponse);
   })
   app.post('/api/survey', function (req, res) {
      var userResults = req.body;
      userResults = userResults.userData;
      var userNumbers = userResults.map(function (x) { return parseInt(x, 10) })
      console.log(userNumbers);
      
      var totalResults = [];
      for (x = 0; x < movieData.length; x++) {
         var newResults = 0;
         var newArray = [];
         
         for (i = 0; i < movieData[x].results.length; i++) {

            var newNumber;
            newNumber = userNumbers[i] - movieData[x].results[i]
            if (newNumber < 0) {
               newNumber *= -1
            }
            newArray.push(newNumber);
         }
         for (y = 0; y < newArray.length; y++) {
            newResults = newResults + newArray[y];

         }
         totalResults.push(newResults);
      }
      
      var lowestNumber = Math.min(...totalResults);
      for (z = 0; z < totalResults.length; z++) {
         if (lowestNumber === totalResults[z]) {
            movieMatch = movieData[z].title;
         }
      }
     
      movieMatch = movieMatch.split(" ");
      movie = movieMatch.join("+");
      var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
      request(queryUrl, function(error, response, body) {
   
         // If the request is successful
         if (!error && response.statusCode === 200) {
         movieResponse.title = JSON.parse(body).Title
         movieResponse.poster = JSON.parse(body).Poster
         movieResponse.plot = JSON.parse(body).Plot
         movieResponse.score = JSON.parse(body).Ratings[1].Value
     console.log(movieResponse);
     res.json("Finding your movie...")
     
         
         }
       })
       
      
      
      
      
   })



    
   


}