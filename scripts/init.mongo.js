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



db.exercise.remove({});

db.exercise.insert([

  {
    id: 1,
    exerciseName: "Running",
    calories: 350
  }
]);
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
    },
    {
      name: "Alex T",
      rating: 5,
      comment: "Finally I can get the six-pack I've been dreaming of!"
    },
    {
      name: "Betty W",
      rating: 5,
      comment: "I'm so fit, I'll live forever!"
    },
    {
      name: "David F",
      rating: 5,
      comment: "Wowzers!"
    },
    {
      name: "Ryan Reynolds",
      rating: 5,
      comment: "This is the best web app Fitness Tracker ever! I have never seen such amazing results. I owe my entire movie career to this React web app! It goes without saying that everyone should be using this."
    },
    {
      name: "Dwayne the Rock Johnson",
      rating: 5,
      comment: "I, Dwayne, The Rock, Johnson fully endorse WYW. If it wasn't for this fitness tracker I would just be a bad actor with no muscles. I am now a bad actor with a great physique thanks to WYW."
    }
  ]);

