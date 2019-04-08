const express = require('express');
const MongoClient = require('mongodb');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.json());
app.use(express.static('static'));


  

  app.get('/api/data', (req, res) => {
    db.collection('userBodyStats').find().toArray().then(bodystats => {
      res.json({ records: bodystats })
    }).catch(error => {
      console.log(error);
      res.status(500).json({ message: `Internal Server Error: ${error}` });
    });
  });

  app.post('/api/data', (req, res) => {
    const newIssue = req.body;
    db.collection('userBodyStats').deleteOne();
    
    db.collection('userBodyStats').insertOne(newIssue).then(result =>
      db.collection('userBodyStats').find({ _id: result.insertedId }).limit(1).next()
    ).then(newIssue => {
      res.json(newIssue);
    }).catch(error => {
      console.log(error);
      res.status(500).json({ message: `Internal Server Error: ${error}` });
    });
  });

let db;
MongoClient.connect('mongodb://localhost', { useNewUrlParser: true }).then(connection => {
  db = connection.db('fitnesstracker');
  app.listen(3000, () => {
    console.log('App started on port 3000');
  });
}).catch(error => {
  console.log('ERROR:', error);
});
