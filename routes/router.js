const express = require("express");
const routerClient = require("express").Router();
const {
    getAll, addClients,
    updateClient, deleteClients, getClient,
} = require("../controllers/clientController");

routerClient.use(express.json())


routerClient
.route("/clients")
        .get(getAll)
        .post(addClients)
//         .put();
        .delete(deleteClients)

.route("/clients/:id")
         .get(getClient)
         .put(updateClient)
//         .delete();


module.exports = routerClient;