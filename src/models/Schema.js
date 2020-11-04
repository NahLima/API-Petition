const mongoose = require("mongoose")

const Schema = mongoose.Schema

const assinaturaSchema = new Schema({
    
    _id:{
        type: mongoose.Schema.Types.ObjectId, //tipo do dado
        auto: true, //autogerado?
        required: true //é obrigatório?
    },
    Email:{
        type: String,
        required: true,
        unique: true
    },
    FirstName:{
        type: String,
        required: true
    },
    LastName:{
        type: String,
        required: true
    },
    City:{
        type: String,
        required: true
    },
    State:{
        type: String,
        required: true
    },
    Country:{
        type: String,
        required: true
    },
    OptinDate :{
        type:Date,
        required:true
    },
    OptinPetition:{
        type:String,
        required:true
    }
},

    {
    collection:"superSalarios",
    versionKey:false
    }

)

const superSalariosCollection = mongoose.model('superSalarios',assinaturaSchema)

module.exports = {superSalariosCollection}