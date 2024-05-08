const {PrismaClient} = require("@prisma/client")

const prisma = new PrismaClient();

const getAll =  async (req, res) => {
    try {
        const clients = await prisma.client.findMany();
        res.send(clients);
    } catch (error) {
        console.log(err);
    }
}

const addClients = async (req, res) => {
    try {
        const {nom, prenom, adresse, ville, numeroTelephone, email } = req.body ;
        const client = await prisma.client.create({
            data : {
                nom,
                prenom,
                adresse,
                ville,
                numeroTelephone,
                email,
            }
        })
        res.send(client); 
    } catch (error) {
        console.log(error);
    }
}

const deleteClients = async(req, res) => {
    try {
        const client = await prisma.client.deleteMany({});
        res.send(client);
    } catch (error) {
        console.log(error)
    }
}

const getClient = async(req, res) => {
    try {
        const path = parseInt(req.params.id)
        const client = await prisma.client.findUnique({
            where : {
                id : path
            }
        })
        res.send(client)
    } catch (error) {
        console.log(error)
    }
    
}

const updateClient = async(req, res) => {
    try {
        const path = parseInt(req.params.id)
        const {nom, prenom, adresse, ville, numeroTelephone, email } = req.body ;
        const client = await prisma.client.update({
            where : {
                id : path
            },
            data : {
                nom,
                prenom,
                adresse,
                ville,
                numeroTelephone,
                email,
            }
        })
        res.send(client); 
    } catch (error) {
        console.log(error);
    }
}


const deleteClient = async(req, res) => {
    try {
        const path = parseInt(req.params.id)
        const client = await prisma.client.delete({
            where : {
                id : path
            }
        })
        res.send(client)
    } catch (error) {
        console.log(error)
    }
    
}



module.exports = {
    getAll,
    addClients,
    deleteClients,
    getClient,
    updateClient,
    deleteClient
    
};