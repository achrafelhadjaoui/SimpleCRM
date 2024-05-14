const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient();

const getAllProduits =  async (req, res) => {
    try {
        const produits = await prisma.produit.findMany();
        res.send(produits);
    } catch (error) {
        console.log(error);
    }
}

const addProduit = async (req, res) => {
    try {
        const {nom, prixAchat, prixVente, tauxMarge, dimension, taille} = req.body ;
        const produit = await prisma.produit.create({
            data : {
                nom,
                prixAchat,
                prixVente,
                tauxMarge,
                dimension,
                taille
            }
        })
        res.send(produit); 
    } catch (error) {
        console.log(error);
    }
}

const deleteAllProduits = async(req, res) => {
    try {
        const produits = await prisma.produit.deleteMany({});
        res.send(produits);
    } catch (error) {
        console.log(error)
    }
}

const getProduit = async(req, res) => {
    try {
        const path = parseInt(req.params.id)
        const produit = await prisma.produit.findUnique({
            where : {
                id : path
            }
        })
        res.send(produit)
    } catch (error) {
        console.log(error)
    }    
}

const updateProduit = async(req, res) => {

    try {
        const path = parseInt(req.params.id)
        const {nom, prixAchat, prixVente, tauxMarge, dimension, taille} = req.body ;
        const produit = await prisma.produit.update({
            where : {
                id : path
            },
            data : {
                nom,
                prixAchat,
                prixVente,
                tauxMarge,
                dimension,
                taille
            }
        })
        res.send(produit); 
    } catch (error) {
        console.log(error);
    }

}


const deleteProduit = async(req, res) => {
    try {
        const path = parseInt(req.params.id)
        const produit = await prisma.produit.delete({
            where : {
                id : path
            }
        })
        res.send(produit)
    } catch (error) {
        console.log(error)
    }
    
}



module.exports = {
    getAllProduits,
    addProduit,
    deleteAllProduits,
    getProduit,
    updateProduit,
    deleteProduit,
    
};