//import dependencias or packege
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

//starting the express
const server = express()
server
    //use body from req
    .use(express.urlencoded({ extended: true }))
    //using the static files
    .use(express.static('public'))

    //configure the template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    //create application routes
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)

//turn server on
server.listen(5500)