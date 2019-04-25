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

  app.get('/api/reviews', (req, res) => {
    db.collection('reviews').find().toArray().then(reviews => {
      const metadata = { total_count: reviews.length };
      res.json({ records: reviews })
    }).catch(error => {
      console.log(error);
      res.status(500).json({ message: `Internal Server Error: ${error}` });
    });
  });
  
  
  app.post('/api/reviews', (req, res) => {
    const newReview = req.body;
    db.collection('reviews').insertOne(newReview).then(result =>
    db.collection('reviews').find({ _id: result.insertedId }).limit(1).next()
    ).then(newReview => {
      res.json(newReview);
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


app.get('/api/meals', (req, res) => {
  db.collection('meals').find().toArray().then(meals => {
    const metadata = { total_count: meals.length };
    res.json({ records: meals, totalCalories: Number(meals.reduce((accumulator, currentValue)=> accumulator+parseInt(currentValue.calories),0) )})
  }).catch(error => {
    console.log(error);
    res.status(500).json({ message: `Internal Server Error: ${error}` });
  });
});


app.post('/api/meals', (req, res) => {
  const newMeal = req.body;

  db.collection('meals').insertOne(newMeal).then(result =>

    db.collection('meals').find({ _id: result.insertedId }).limit(1).next()
  ).then(newMeal => {
    res.json(newMeal);
  }).catch(error => {
    console.log(error);
    res.status(500).json({ message: `Internal Server Error: ${error}` });
  });
});

/////////////////////////

