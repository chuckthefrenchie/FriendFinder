// Dependencies
var express = require("express");
// var path = require("path");

//Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Starts listening
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
    console.log("Server listening on: http://localhost:" + PORT);
});