const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient();

const getAllFournisseures =  async (req, res) => {
    try {
        const fournisseurs = await prisma.fournisseur.findMany();
        res.send(fournisseurs);
    } catch (error) {
        console.log(error);
    }
}

const addFournisseur = async (req, res) => {
    try {
        const {nom, ville, numeroTelephone, email, adresse} = req.body ;
        const fournisseur = await prisma.fournisseur.create({
            data : {
                nom,
                ville,        
                numeroTelephone,  
                email,
                adresse,
            }
        })
        res.send(fournisseur); 
    } catch (error) {
        console.log(error);
    }
}

const deleteAllFournisseures = async(req, res) => {
    try {
        const fournisseures = await prisma.fournisseur.deleteMany({});
        res.send(fournisseures);
    } catch (error) {
        console.log(error)
    }
}

const getFournisseur = async(req, res) => {
    try {
        const path = parseInt(req.params.id)
        const fournisseur = await prisma.fournisseur.findUnique({
            where : {
                id : path
            }
        })
        res.send(fournisseur)
    } catch (error) {
        console.log(error)
    }    
}

const updateFournisseur = async(req, res) => {
    try {
        const path = parseInt(req.params.id)
        const {nom, ville, numeroTelephone, email, adresse} = req.body ;
        const fournisseur = await prisma.fournisseur.update({
            where : {
                id : path
            },
            data : {
                nom,
                ville,        
                numeroTelephone,  
                email,
                adresse,
            }
        })
        res.send(fournisseur); 
    } catch (error) {
        console.log(error);
    }

}


const deleteFournisseur = async(req, res) => {
    try {
        const path = parseInt(req.params.id)
        const fournisseur = await prisma.fournisseur.delete({
            where : {
                id : path
            }
        })
        res.send(fournisseur)
    } catch (error) {
        console.log(error)
    }
    
}



module.exports = {
    getAllFournisseures,
    addFournisseur,
    deleteAllFournisseures,
    getFournisseur,
    updateFournisseur,
    deleteFournisseur,
    
};