"use strict";

// Appel des modules
const express = require("express");
const router = express.Router();

// Définition du chemin de la page
const path = "/";

// Définition du controlleur de la page
const controller = (request, response) => {

    response.render("homepage");

};

// Ajout de la définition de la page au registre de routage de Express
router.get(path, controller);


// Module Export
// -------------

module.exports = router;