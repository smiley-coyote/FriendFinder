// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var request = require("request");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Starts the server to begin listening
// =============================================================

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);
app.use(express.static("public"));
app.listen(PORT, function() {
   console.log("App listening on PORT " + PORT);
 });
 
 