const express = require('express');
const MongoClient = require('mongodb');
const bodyParser = require('body-parser'); 

const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

app.use(bodyParser.json());
app.use(express.static('static'));
<<<<<<< HEAD

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
    //const metadata = { total_count: issues.length };
    res.json({ records: bodystats });
  });

  app.post('/api/data', (req, res) => {
  const newIssue = req.body;
  updateStat(newIssue);  
  res.json(newIssue);
});

=======
app.use(bodyParser.json());
>>>>>>> 90dd82a88c21879f5f276f76138b9f3beb144892
app.listen(3000, function () {
    console.log('App started on port 3000');
});