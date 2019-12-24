const express = require('express')
const app = express()
const cors = require('cors')
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/createRouter.js');

app.use(cors())
app.use(parser.json())

MongoClient.connect('mongodb://localhost:27017')
   .then((client) => {
       const db = client.db('mini-crm')
       const candidateCollection = db.collection('candidates')
       const companyCollection = db.collection('companies')
       const candidateRouter = createRouter(candidateCollection)
       const companyRouter = createRouter(companyCollection)
       app.use('/api/candidates', candidateRouter)
       app.use('/api/companies', companyRouter)

   })
   .catch(console.error)

app.get('/', function (req, res) { 
    res.json({message: "Hello World"})
});

app.listen(3000, function(){
    console.log("app is listening on port 3000")
})