const express = require('express');
const app = express();
const { Cat }  = require('./models');

app.use(express.json());



app.get('/cats?', (request, response) => {
    Cat.findAll( {where: request.query}).then(cats => ( response.status(200).json(cats)).catch(err => {
        response.status(400).json({message: "error"})
    }))
   
})

app.post('/cats', (request, response) => {
    Cat.create(request.body).then(cat => response.status(201).json(cat).catch(err => {
        response.status(400).json({message: "error"})
    }))
    
})

app.get('/cats/:catId', (request, response) => {
    Cat.findByPk(request.params.catId).then(cat => response.status(200).json(cat)).catch(err => {
        response.status(400).send({err})
    })
})

app.patch('/cats/:catId', (request, response) => {
    Cat.update(request.body, { where: { id: request.params.catId }}).then(cat => response.status(200).json(cat).catch(err => {
        response.status(400).send({message: "error"})
    }))
})

app.delete('/cats/:catId', (request, response) => {
    Cat.destroy( {where: {id: request.params.catId}}).then(cat => response.status(200).json("deleted").catch(err => {
        response.status(400).json({message: "error"})
    }))
})

app.patch('/cats/feed/:catId', (request, response) => {
    Cat.update({lastFed: new Date()}, {where: {id: request.params.catId}}).then(cat => response.status(200).json(cat).catch(err => {
        response.status(400).json({message: "error"})
    })) 
})



module.exports = app;