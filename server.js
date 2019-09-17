// dependencies
var express = require("express");

//express 
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// listener
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
    console.log("Server listening on: http://localhost:" + PORT);
});