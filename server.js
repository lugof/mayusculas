require("dotenv").config(); //

const express = require("express");
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes")
const cors = require('cors');

// Requiring our models for syncing
var db = require("./models");

var corsOption = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token']
};

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);
app.use(cors(corsOption));


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("public"));
}
// Routes
// =============================================================


console.log("we are on SERVER!!")

// Connect to the Sequelize db
// Syncing our sequelize models and then starting our Express app
// =============================================================

    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
 
  module.exports = app;