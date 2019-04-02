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
    //const metadata = { total_count: issues.length };
    res.json({ records: bodystats });
  });

  app.post('/api/data', (req, res) => {
  const newIssue = req.body;
  updateStat(newIssue);  
  res.json(newIssue);
});

app.listen(3000, function () {
    console.log('App started on port 3000');
});