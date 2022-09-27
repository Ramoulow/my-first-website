"use strict";

// Appel des modules
const express = require("express");
const router = express.Router();

// Définition du chemin de la page
const path = "/";

// Définition du controlleur de la page
const controller = (request, response) => {

    let username = "Bobby";

    let fruits = ["Pommes", "Poires", "Bananes"];

    // response.render("nom de la vue", objet de données a transmettre à la vue);
    response.render("homepage", {
        username: username,
        fruits: fruits
    });

};

// Ajout de la définition de la page au registre de routage de Express
router.get(path, controller);


// Module Export
// -------------

module.exports = router;