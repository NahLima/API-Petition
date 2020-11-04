const express = require('express');
const app = express();
const cors = require('cors')

const dataBase = require('./models/repository')
const assinaturas = require('./routes/router')

dataBase.connect()
app.use(cors())
app.use(express.json())
app.use('/', assinaturas)

module.exports = app;