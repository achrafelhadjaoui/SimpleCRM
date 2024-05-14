const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient();

const getAllEntreprises =  async (req, res) => {
    try {
        const entreprises = await prisma.entreprise.findMany();
        res.send(entreprises);
    } catch (error) {
        console.log(error);
    }
}

const addEntreprise = async (req, res) => {
    try {
        const {nom, siegeSocial, /*dateCreation,*/ identifiantFiscal, capital, nombreEmployes,
            ville, responsable, numeroTelephone, email
         } = req.body ;
        const entreprise = await prisma.entreprise.create({
            data : {
                nom,              
                siegeSocial,      
                dateCreation : new Date(),
                identifiantFiscal, 
                capital,
                nombreEmployes,
                ville,  
                responsable,      
                numeroTelephone,  
                email 
            }
        })
        res.send(entreprise); 
    } catch (error) {
        console.log(error);
    }
}

const deleteAll = async(req, res) => {
    try {
        const entreprises = await prisma.entreprise.deleteMany({});
        res.send(entreprises);
    } catch (error) {
        console.log(error)
    }
}

const getEntreprise = async(req, res) => {
    try {
        const path = parseInt(req.params.id)
        const entreprise = await prisma.entreprise.findUnique({
            where : {
                id : path
            }
        })
        res.send(entreprise)
    } catch (error) {
        console.log(error)
    }    
}

const updateEntreprise = async(req, res) => {
    try {
        const path = parseInt(req.params.id)
        const {nom, siegeSocial, identifiantFiscal, capital, nombreEmployes,
            ville, responsable, numeroTelephone, email
         } = req.body ;
        const entreprise = await prisma.entreprise.update({
            where : {
                id : path
            },
            data : {
                nom,              
                siegeSocial,      
                dateCreation : new Date(),
                identifiantFiscal, 
                capital,
                nombreEmployes,
                ville,  
                responsable,      
                numeroTelephone,  
                email 
            }
        })
        res.send(entreprise); 
    } catch (error) {
        console.log(error);
    }
}


const deleteEntreprise = async(req, res) => {
    try {
        const path = parseInt(req.params.id)
        const entreprise = await prisma.entreprise.delete({
            where : {
                id : path
            }
        })
        res.send(entreprise)
    } catch (error) {
        console.log(error)
    }
    
}



module.exports = {
    getAllEntreprises,
    addEntreprise,
    deleteAll,
    getEntreprise,
    updateEntreprise,
    deleteEntreprise,
    
};