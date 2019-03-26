const foods = [
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
      }
  ];
  
  var contentNode = document.getElementById("mealcontent");
  
  class MealSummary extends React.Component {
    render() {
      return (<div>
        <h4>Enter food name and information</h4>
        <h4>Total Calories: {this.props.totalCalories}</h4>
        </div>

      );
    }
  }
  
  
  const FoodTableRow = (props) => (
    <tr>
      <td>{props.food.id}</td>
      <td>{props.food.foodName}</td>
      <td>{props.food.numberOfServings}</td>
      <td>{props.food.mealType}</td>
      <td>{props.food.calories}</td>
      <td>{props.food.fat}</td>
      <td>{props.food.carbohydrates}</td>
    </tr>
  );
  
  
  function MealTable(props) {
    const FoodTableRows = props.foods.map(food => (
      <FoodTableRow key={food.id} food={food} />
    ));
    return (
      <table className="bordered-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Food Name</th>
            <th>Servings</th>
            <th>Meal Type</th>
            <th>Calories</th>
            <th>Fat</th>
            <th>Carbohydrates</th>
          </tr>
        </thead>
        <tbody>{FoodTableRows}</tbody>
      </table>
    );
  }
  
  class AddMeal extends React.Component {
    constructor() {
      super();
      this.state = {
        mealType: 'Breakfast',
    }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleSelectChange = this.handleSelectChange.bind(this);
    }
  
    handleSubmit(e) {
      e.preventDefault();
      let form = document.forms.addMeal;
      this.props.createFood({
        foodName: form.foodName.value,
        calories: form.calories.value,
        mealType: this.state.mealType,
        servings: 0,
      });
 
      // Clear the form for the next input.
      form.foodName.value = '';
      form.calories.value = '';
    }

    handleSelectChange(e){
        this.setState({mealType: e.target.value});
      }
  
    render() {
      return (
        <div>
          <form name="addMeal" onSubmit={this.handleSubmit}>
            <input type="text" name="foodName" placeholder="Food Name" />
            <input type="text" name="calories" placeholder="Calories" />
            <select 
                                defaultValue= 'Breakfast'
                                value={this.state.mealType} 
                                onChange={this.handleSelectChange}
   >
    <option value="Breakfast">Breakfast</option>
    <option value="Lunch">Lunch</option>
    <option value="Dinner">Dinner</option>
    <option value="Snack">Snack</option>
        </select>
            <button>Add</button>
          </form>
        </div>
      );
    }
  }
  
  class MealList extends React.Component {
    constructor() {
      super();
      this.state = { foods: [],
      totalCalories: 0 };
    
      this.addMeal = this.addMeal.bind(this);
      this.calculateCalories = this.calculateCalories.bind(this);
    }
  
    componentDidMount() {
      this.loadData();
    }
  
    loadData() {
  
        this.setState({
          foods: foods,
        });
        this.calculateCalories();
}
  calculateCalories(){
    const cal = foods.reduce((total, amount) => total.calories + amount.calories); 
    this.setState({totalCalories: cal});
  } 
  
    addMeal(newMeal) {
      const newMeals = this.state.foods.slice();
      newMeal.id = this.state.foods.length + 1;
      newMeals.push(newMeal);
      this.setState({ foods: newMeals,
        totalCalories: Number(this.state.totalCalories) + Number(newMeal.calories)
    });
  }
  
    render() {
      return (
        <div>
          <h1>Meal Tracker</h1>
          <MealSummary totalCalories = {this.state.totalCalories} />
          <hr />
          <MealTable foods={this.state.foods} />
          <hr />
          <AddMeal createFood={this.addMeal} />
        </div>
      );
    }
  }
  
  // This renders the JSX component inside the content node:
  ReactDOM.render(<MealList />, contentNode);