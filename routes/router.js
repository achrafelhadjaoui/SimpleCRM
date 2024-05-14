const express = require("express");
const routerClient = require("express").Router();

const {getAll, addClients, deleteClients, getClient, updateClient, deleteClient} = require("../controllers/clientController");
const {getAllEntreprises, addEntreprise, deleteAll, deleteEntreprise, updateEntreprise, getEntreprise} = require("../controllers/entrepriseController");
const {getAllFournisseures, addFournisseur, deleteAllFournisseures, deleteFournisseur, updateFournisseur, getFournisseur} = require("../controllers/fournissorController");
const {getAllFactures, addFacture, deleteAllFactures, deleteFacture, updateFacture, getFacture, count} = require("../controllers/factureController");
const {getAllCommandes, addCommandes, deleteAllCommandes, deleteCommande, updateCommande, getCommand} = require("../controllers/commandController");
const {getAllProduits, addProduit, deleteAllProduits, deleteProduit, updateProduit, getProduit} = require("../controllers/produitController");
const {getAllLigneFactures, addLigneFacture, deleteAllLigneFactures, deleteLigneFacture, updateLigneFacture, getLigneFacture} = require("../controllers/ligneFctureController");


routerClient.use(express.json())

//client
routerClient.route("/clients")
                    .get(getAll)
                    .post(addClients)
                    .delete(deleteClients)
routerClient.route("/clients/:id")
                     .get(getClient)
                     .put(updateClient)
                     .delete(deleteClient)

//entreprise
routerClient.route("/entreprise")
                    .get(getAllEntreprises)
                    .post(addEntreprise)
                    .delete(deleteAll)
routerClient.route("/entreprise/:id")
                    .get(getEntreprise)
                    .put(updateEntreprise)
                    .delete(deleteEntreprise)

//Fournisseur
routerClient.route("/fournisseur")
                    .get(getAllFournisseures)
                    .post(addFournisseur)
                    .delete(deleteAllFournisseures)
routerClient.route("/fournisseur/:id")
                    .get(getFournisseur)
                    .put(updateFournisseur)
                    .delete(deleteFournisseur)

//Facture
routerClient.route("/facture")
                    .get(getAllFactures)
                    .post(addFacture)
                    .delete(deleteAllFactures)
routerClient.route("/facture/:id")
                    .get(getFacture)
                    .put(updateFacture)
                    .delete(deleteFacture)

//commandes
routerClient.route("/commande")
                    .get(getAllCommandes)
                    .post(addCommandes)
                    .delete(deleteAllCommandes)
routerClient.route("/commade/:id")
                    .get(getCommand)
                    .put(updateCommande)
                    .delete(deleteCommande)

//Produit
routerClient.route("/produit")
                    .get(getAllProduits)
                    .post(addProduit)
                    .delete(deleteAllProduits)
routerClient.route("/produit/:id")
                    .get(getProduit)
                    .put(updateProduit)
                    .delete(deleteProduit)


//ligneFacture
routerClient.route("/ligneFacture")
                    .get(getAllLigneFactures)
                    .post(addLigneFacture)
                    .delete(deleteAllLigneFactures)
routerClient.route("/ligneFacture/:id")
                    .get(getLigneFacture)
                    .put(updateLigneFacture)
                    .delete(deleteLigneFacture)

routerClient.route("/count")
                    .get(count)


module.exports = routerClient;