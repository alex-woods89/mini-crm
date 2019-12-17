const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

app.use(cors())
app.use(parser.json())

MongoClient.connect('mongodb://localhost:27017')
   .then((client) => {
       const db = client.db('mini-crm')
       const candidateCollection = db.collection('candidates')
       const candidateRouter = createRouter(candidateCollection)
       app.use('/api/candidates', candidateRouter)

   })
   .catch(console.error)

app.get('/', function (req, res) { 
    res.json({message: "Hello World"})
});

app.listen(3000, function(){
    console.log("ap is listening on port 3000")
})