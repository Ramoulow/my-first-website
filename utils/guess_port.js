"use strict";

const net = require("net");

module.exports = function() {
    
    // Création d'un serveur avec le module "net"
    const server = net.createServer();

    // Démarrage du serveur sur le port 0
    // Le port 0 n'existant pas, le module "net" va rechercher un port disponible
    server.listen(0);

    // Récupétation du numéro de port attribué par le module "net"
    let port = server.address().port;

    // Fermeture du serveur
    server.close();

    // Retourne le numéro de port    
    return port;
};