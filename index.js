var express = require("express");
var app = express();

var rollADie = require("./routes.js");

app.use('/roll-a-die', rollADie);
app.use('/health-check', function(req, res){res.sendStatus(200)});

var server = app.listen(3000, function () {
    console.log("Listening on port %s...", server.address().port);
});