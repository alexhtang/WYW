db = new Mongo().getDB('fitnesstracker');

db.meals.remove({});

db.meals.insert([
  {
    foodName: "Omelette",
    mealType: "Breakfast",
    numberOfServings: 1,
    calories: 350,
    fat: 35,
    carbohydrates: 12
  },
  {
    foodName: "Grilled Chicken",
    mealType: "Lunch",
    numberOfServings: 2,
    calories: 160,
    fat: 5,
    carbohydrates: 0
  },
]);


