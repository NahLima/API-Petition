//const { superSalariosCollection } = require('../models/Schema')
const assinaturaSchema = require('../models/Schema')


// getAll
// const getAssinaturas =  (req,res) => {
//     console.log(req.url)
//     assinaturaSchema.superSalariosCollection.find((error, allAssinaturas) => {
//         if(error){
//             return res.status(500).send(error)
//         }else{
//             return res.status(200).send(allAssinaturas)
//         }
//     })
// }


const getAssinaturas = (request, response) =>{
    console.log(request.url)
    response.status(200).send(assinaturaSchema)
}

//getAssinaturaById
const  getAssinaturaById =  (req,res) => {
    const idParam = req.params._id
    assinaturaSchema.superSalariosCollection.findById(idParam, (error, assinaturaID)=>{
        if(error){
            return res.status(500).send(error)
        }else{
            if(assinaturaID){
                return res.status(200).send(assinaturaID)
            }else{
                return res.status(404).send("Assinante não encontrado")
            }
        }
    })
}

//addAssinatura
const addAssinatura = (req,res) => {
    console.log(req.url)
    const assinaturaBody = req.body
    const assinaturaAd = new assinaturaSchema.superSalariosCollection(assinaturaBody)

    assinaturaAd.save((error)=>{
        if(error){
            return res.status(400).send(error)
        }else{
            return res.status(201).send(assinaturaAd)
        }
    })
}


 //updateAssinatura
const updateAssinatura = (req, res) => {
    const idParam = req.params.id
    const assinaturaBody = req.body
    const novo = {new: true}

    assinaturaSchema.superSalariosCollection.findByIdAndUpdate(
        idParam,
        assinaturaBody,
        novo,
        (error, assinaturaUp) =>{
            if(error){
                return res.status(500).send(error)
            } else if (assinaturaUp) {
                return res.status(200).send(assinaturaUp)
            } else{
                return res.sendStatus(404)
            }
        }
    )    
    
}

 //deleteAssinatura
const deleteAssinatura = (req, res) => {
    const idParam = req.params.id
    assinaturaSchema.superSalariosCollection.findByIdAndDelete(idParam, (error, delAssinatura) => {
        if(error){
            return res.status(500).send(error)
            } else{
                if(delAssinatura){
                    return res.status(200).send("Assinatura foi apagada")
                }else {
                    return res.sendStatus(404)
                }
            }
        })
    }


module.exports = {
    getAssinaturas,
    getAssinaturaById, 
    addAssinatura, 
    updateAssinatura, 
    deleteAssinatura
}