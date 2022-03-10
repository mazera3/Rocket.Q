const express = require('express') // importa express
const path = require('path')
require('dotenv').config()
const PORT = process.env.PORT || 3001
const route = require('./route')

const server = express() // inicia express

server.set('view engine', 'ejs')

server.use(express.static("public"))

server.set('views', path.join(__dirname, 'views'))

server.use(express.urlencoded({extended: true}))

server.use(route)

server.listen(PORT, () => console.log('Rodando na porta:', PORT))