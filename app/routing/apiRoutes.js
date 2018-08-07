var movieData = require('../data/movies.js');

module.exports = function (app){
   app.get('/api/movies', function (req, res){
      res.json(movieData);
   })
   app.post('/api/survey', function (req, res){
      var userResults = req.body;
      userResults = userResults.userData;
      var userNumbers = userResults.map(function(x) { return parseInt(x, 10) })
     console.log(userNumbers);
     
     var totalResults = [];
     for(x=0; x<movieData.length; x++){
      var newResults = 0;
      var newArray = [];
      var movieMatch;
     for(i=0;i<movieData[x].results.length;i++){
        
        var newNumber;
        newNumber = userNumbers[i] - movieData[x].results[i]
        if(newNumber<0){
        newNumber *= -1
        }
        newArray.push(newNumber);
     }
     for(y=0;y<newArray.length;y++){
      newResults = newResults + newArray[y];
      
     }
     totalResults.push(newResults);
   }
     console.log(totalResults)
     var lowestNumber = Math.min(...totalResults);
     for(z=0;z<totalResults.length;z++){
        if(lowestNumber === totalResults[z]){
         movieMatch = movieData[z].title;
        }
     }
     console.log(movieMatch);
   })

}