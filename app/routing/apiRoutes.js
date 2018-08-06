var movieData = require('../data/movies.js');

module.exports = function (app){
   app.get('/api/movies', function (req, res){
      res.json(movieData);
   })
   app.post('/api/survey', function (req, res){
      var userResults = req.body;
      console.log(userResults);
      
      
   })
}