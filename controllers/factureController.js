const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient();

const getAllFactures =  async (req, res) => {
    try {
        const factures = await prisma.facture.findMany();
        res.send(factures);
    } catch (error) {
        console.log(error);
    }
}

const addFacture = async (req, res) => {
    try {
        const {clientId, montantTotal,} = req.body ;
        const facture = await prisma.facture.create({
            data : {
                clientId,
                date : new Date(),       
                montantTotal,   
            }
        })
        res.send(facture); 
    } catch (error) {
        console.log(error);
    }
}

const deleteAllFactures = async(req, res) => {
    try {
        const factures = await prisma.facture.deleteMany({});
        res.send(factures);
    } catch (error) {
        console.log(error)
    }
}

const getFacture = async(req, res) => {
    try {
        const path = parseInt(req.params.id)
        const facture = await prisma.facture.findUnique({
            where : {
                id : path
            }
        })
        res.send(facture)
    } catch (error) {
        console.log(error)
    }    
}

const updateFacture = async(req, res) => {

    try {
        const path = parseInt(req.params.id)
        const {clientId, montantTotal,} = req.body ;
        const facture = await prisma.facture.update({
            where : {
                id : path
            },
            data : {
                clientId,
                date : new Date(),        
                montantTotal,   
            }
        })
        res.send(facture); 
    } catch (error) {
        console.log(error);
    }

}


const deleteFacture = async(req, res) => {
    try {
        const path = parseInt(req.params.id)
        const facture = await prisma.facture.delete({
            where : {
                id : path
            }
        })
        res.send(facture)
    } catch (error) {
        console.log(error)
    }
    
}



module.exports = {
    getAllFactures,
    addFacture,
    deleteAllFactures,
    getFacture,
    updateFacture,
    deleteFacture,
    
};