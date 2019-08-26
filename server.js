require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const request = require("request");
const cheerio = require("cheerio");
const bodyParser = require("body-parser");
var PORT = process.env.PORT || 3030;
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({type: 'application/*+json'}));
app.use(bodyParser.raw({type: 'application/vnd.custom-type'}));
app.use(bodyParser.text({type: 'text/html'}));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/JudiciaryScraper";


async function mongoConnect(MONGODB_URI) {
    try {    
        await mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
        console.log("mongo has connected");
    } catch(err) {
        console.error("failed to connect mongo");
    }
};

mongoConnect(MONGODB_URI);

app.listen(PORT, function() {
    console.log("We're live on port "+ PORT);
});