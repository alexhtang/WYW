db = new Mongo().getDB('fitnesstracker');

db.userBodyStats.remove({});

db.userBodyStats.insert([
    {
      height: "0",
      weight: 0,
      age: 0,
      activity: "N/A",
      gender: "N/A",
    },]);


db.meals.remove({});
db.meals.insert([
    {
      id: 1,
      foodName: "Omelette",
      mealType: "Breakfast",
      numberOfServings: 1,
      calories: 350,
      fat: 35,
      carbohydrates: 12
    },
    {
        id: 2,
        foodName: "Grilled Chicken",
        mealType: "Lunch",
        numberOfServings: 2,
        calories: 160,
        fat: 5,
        carbohydrates: 0
      },
      {
        id: 3,
        foodName: "Steak",
        mealType: "Dinner",
        numberOfServings: 2,
        calories: 130,
        fat: 5,
        carbohydrates: 0
      },
      {
        id: 2,
        foodName: "Cheese Its",
        mealType: "Snack",
        numberOfServings: 2,
        calories: 900,
        fat: 5,
        carbohydrates: 30
      }
  ]);

  db.breakfast.remove({});


db.reviews.remove({});
  db.reviews.insert([
    {
      name: "Tim R",
      rating: 5,
      comment: "This has revolutionized my life!"
    }
  ]);

