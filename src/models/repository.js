const mongoose = require("mongoose")
//mongoose.Promise = global.Promise 

const DB_URL = "mongodb://localhost:27017/assinaturas" // porta padrão do mongo db

const connect = () => {
    mongoose.connect(DB_URL, {useNewUrlParser:true}) // esse parametro é para a gente não ficar recebenco erros // coloca uma string para json
    const connection = mongoose.connection
    connection.on("error",()=> console.error("Erro ao conectar com o MongoDB"))
    connection.once("open", ()=> console.log("Estamos conectadas"))
}

module.exports = {connect}
