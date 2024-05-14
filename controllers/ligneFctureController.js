const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient();

const getAllLigneFactures =  async (req, res) => {
    try {
        const ligneFactures = await prisma.ligneFacture.findMany();
        res.send(ligneFactures);
    } catch (error) {
        console.log(error);
    }
}

const addLigneFacture = async (req, res) => {
    try {
        const {factureId, produitId, quantite, prixUnitaire, sousTotal} = req.body ;
        const ligneFacture = await prisma.ligneFacture.create({
            data : {
                factureId,
                produitId,
                quantite,
                prixUnitaire,
                sousTotal,
            }
        })
        res.send(ligneFacture); 
    } catch (error) {
        console.log(error);
    }
}

const deleteAllLigneFactures = async(req, res) => {
    try {
        const ligneFactures = await prisma.ligneFacture.deleteMany({});
        res.send(ligneFactures);
    } catch (error) {
        console.log(error)
    }
}

const getLigneFacture = async(req, res) => {
    try {
        const path = parseInt(req.params.id)
        const ligneFacture = await prisma.ligneFacture.findUnique({
            where : {
                id : path
            }
        })
        res.send(ligneFacture)
    } catch (error) {
        console.log(error)
    }    
}

const updateLigneFacture = async(req, res) => {

    try {
        const path = parseInt(req.params.id)
        const {factureId, produitId, quantite, prixUnitaire, sousTotal} = req.body ;
        const ligneFacture = await prisma.ligneFacture.update({
            where : {
                id : path
            },
            data : {
                factureId,
                produitId,
                quantite,
                prixUnitaire,
                sousTotal,
            }
        })
        res.send(ligneFacture); 
    } catch (error) {
        console.log(error);
    }

}


const deleteLigneFacture = async(req, res) => {
    try {
        const path = parseInt(req.params.id)
        const ligneFacture = await prisma.ligneFacture.delete({
            where : {
                id : path
            }
        })
        res.send(ligneFacture)
    } catch (error) {
        console.log(error)
    }
    
}



module.exports = {
    getAllLigneFactures,
    addLigneFacture,
    deleteAllLigneFactures,
    getLigneFacture,
    updateLigneFacture,
    deleteLigneFacture,
    
};