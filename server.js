const express = require('express');
const MongoClient = require('mongodb');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.json());
app.use(express.static('static'));

const bodystats = [
  {
    height: "0",
    weight: "0",
    age: "0",
    gender: "N/A"
  }
];

  function updateStat(a){
    bodystats[0] = a;
  }

  

  app.get('/api/data', (req, res) => {
    db.collection('userBodyStats').find().toArray().then(bodystats => {
      const metadata = { metadata: 'metadata' };
      res.json({ _metadata: metadata, records: bodystats })
    }).catch(error => {
      console.log(error);
      res.status(500).json({ message: `Internal Server Error: ${error}` });
    });
  });

  app.post('/api/data', (req, res) => {
  const newStats = req.body;
  newStats.created = new Date();

  updateStat(newStats);
  res.json(newStats);


db.collection('userBodyStats').insertOne(newStats).then(result =>
    db.collection('userBodyStats').find({ _id: result.insertedId }).limit(1).next()
  ).then(bodystats => {
    res.json(bodystats);
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
