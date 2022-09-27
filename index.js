"use strict";

const express = require("express");

const app = express();

const guessPort = require("./utils/guess_port");
const port = guessPort();

console.log(port);

// App settings
// ------------



// App setup
// ---------



// Routing
// -------



// Starting server App
// -------------------

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});