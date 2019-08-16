require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const request = require("request");
const cheerio = require("cheerio");
const bodyParser = require("body-parser");
var PORT = process.env.PORT || 3030;
const app = express();

app.use(express.static("public"));
app.use(bodyParser.json({type: 'application/*+json'}));
app.use(bodyParser.raw({type: 'application/vnd.custom-type'}));
app.use(bodyParser.text({type: 'text/html'}));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/GardenScraper";

app.listen(PORT, function() {
    console.log("We're live on port "+ PORT);
});