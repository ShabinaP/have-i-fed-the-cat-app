const express = require('express');
const app = express();
const { Cat }  = require('./models');

app.use(express.json());



app.get('/cats?', (request, response) => {
    Cat.findAll( {where: request.query}).then(cats => ( response.status(200).json(cats)))
   
})

app.post('/cats', (request, response) => {
    Cat.create(request.body).then(cat => response.status(201).json(cat))
    
})

app.get('/cats/:catId', (request, response) => {
    Cat.findByPk(request.params.catId).then(cat => response.status(200).json(cat))
})

app.patch('/cats/:catId', (request, response) => {
    Cat.update(request.body, { where: { id: request.params.catId }}).then(cat => response.status(200).json(cat))
})

app.delete('/cats/:catId', (request, response) => {
    Cat.destroy( {where: {id: request.params.catId}}).then(cat => response.status(200).json("deleted"))
})


module.exports = app;