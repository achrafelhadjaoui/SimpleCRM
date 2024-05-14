const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient();

const getAllCommandes =  async (req, res) => {
    try {
        const commandes = await prisma.commandeFournisseur.findMany();
        res.send(commandes);
    } catch (error) {
        console.log(error);
    }
}

const addCommandes = async (req, res) => {
    try {
        const {fournisseurId, statut,} = req.body ;
        const commande = await prisma.commandeFournisseur.create({
            data : {
                fournisseurId,
                date : new Date(),       
                statut,   
            }
        })
        res.send(commande); 
    } catch (error) {
        console.log(error);
    }
}

const deleteAllCommandes = async(req, res) => {
    try {
        const commandes = await prisma.commandeFournisseur.deleteMany({});
        res.send(commandes);
    } catch (error) {
        console.log(error)
    }
}

const getCommand = async(req, res) => {
    try {
        const path = parseInt(req.params.id)
        const commande = await prisma.commandeFournisseur.findUnique({
            where : {
                id : path
            }
        })
        res.send(commande)
    } catch (error) {
        console.log(error)
    }    
}

const updateCommande = async(req, res) => {

    try {
        const path = parseInt(req.params.id)
        const {fournisseurId, statut,} = req.body ;
        const commande = await prisma.commandeFournisseur.update({
            where : {
                id : path
            },
            data : {
                fournisseurId,
                date : new Date(),        
                statut,   
            }
        })
        res.send(commande); 
    } catch (error) {
        console.log(error);
    }

}


const deleteCommande = async(req, res) => {
    try {
        const path = parseInt(req.params.id)
        const commande = await prisma.commandeFournisseur.delete({
            where : {
                id : path
            }
        })
        res.send(commande)
    } catch (error) {
        console.log(error)
    }
    
}



module.exports = {
    getAllCommandes,
    addCommandes,
    deleteAllCommandes,
    getCommand,
    updateCommande,
    deleteCommande,
    
};