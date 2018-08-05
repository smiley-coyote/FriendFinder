var movieData = require('../data/movies.js');

module.exports = function (app){
   app.get('/api/movies', function (req, res){
      res.json(movieData);
   })
   app.post('/api/movies', function (req, res){
      res.json("posted!");
   })
}