db = new Mongo().getDB('fitnesstracker');

db.userBodyStats.remove({});

db.userBodyStats.insert([
    {
      height: "0",
      weight: "0",
      age: "0",
      gender: "N/A",
    },]);


db.meals.remove({});

