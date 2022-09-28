"use strict";

const ejs = require("ejs");
const path = require("path");

const express = require("express");
const app = express();

const guessPort = require("./utils/guess_port");
// const port = guessPort();
const port = 3000;

console.log(port);

// App settings
// ------------



// App setup
// ---------

// Définition du moteur de rendu,
// On précise à Express que le moteur de rendu des vues se fera avec le module "ejs"
// <le module "ejs", transmet à Express ses paramètres avec la propriété "__express"
app.engine("html", ejs.__express);

// Définition du répertoire de stockage des fichiers de vues
// Path.join() va résoudre automatiquement le chemin absolut du repertoire "views"
app.set("views", path.join(__dirname, "views"));

// Utilisation du moteur de rendu html
app.set("view engine", "html");

app.use(express.static( path.join(__dirname, "public")));

// Routing
// -------

app.use(require("./controllers/homepage"));

app.use(require("./controllers/about"));

app.use(require("./controllers/contact"));

app.use(require("./controllers/books"));

app.use(function(req, res) {
    res.status(404);
       res.render("404", {
        pageTitle: "404 not found",
        pageId: "err404",
        host: req.hostname,
        url:req.url
       });
});

// Starting server App
// -------------------

app.listen(port, () => {
    console.log("App listening on port", port);
});