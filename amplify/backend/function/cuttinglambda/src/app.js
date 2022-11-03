/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/




//const http = require("http");
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

//const port = parseInt(process.env.PORT, 10) || 8000;

// Set up the express app
const app = express();
//const server = http.createServer(app);

// Log requests to the console.
app.use(logger("dev"));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

// Setup a default catch-all route that sends back a welcome message in JSON format.
require("./server/routes")(app);
app.get("*", (req, res) =>
  res.status(200).send({
    message: "Init the API!"
  })
);

app.listen(3000, function() {
  console.log("App started")
});

module.exports = app

//app.set("port", port);

//server.listen(port);