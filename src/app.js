const express = require('express');
const app = express();
app.use(express.json())


app.get('/', (request, response) => {
    response.sendStatus(200)
})

app.post('/cats', (request, response) => {
    response.status(201).json(request.body)
})
module.exports = app;