
var contentNode = document.getElementById("mealcontent");
class FoodList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            selectValue: 'Breakfast',
            text: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


        render(){
            return(
                <div>
                    <h3>Meals</h3>

                    <MealList items = {this.state.items}/>
                    <form onSubmit={this.handleSubmit}>
                        <input
                        onChange={this.handleChange}
                        value={this.state.text}
                        />

        <select 
                defaultValue= 'Breakfast'
                value={this.state.selectValue} 
                onChange={this.handleSelectChange} >
    <option value="Breakfast">Breakfast</option>
    <option value="Lunch">Lunch</option>
    <option value="Dinner">Dinner</option>
    <option value="Snack">Snack</option>
        </select>
    <p>{this.state.selectValue}</p>

                    <button>
                       Add Meal
                    </button>
          
                    </form>

                </div>
            );
        }

        handleChange(e){
            this.setState({text: e.target.value});
        }
        handleSelectChange(e){
            this.setState({selectValue: e.target.value});
        }
        handleSubmit(e){
            e.preventDefault();
            if(this.state.text.length ===0){return;}

            const newItem = {
                id: Date.now(),
                text: this.state.text,
                mealType: this.state.selectValue
            }

            this.setState(prev => ({
                items: prev.items.concat(newItem),
                text: ''
            }));
        

        }

    }



class MealList extends React.Component {
    render(){
        return (
            /*<ul>
                {this.props.items.map(item => (
                    
                    <li key={item.id}>{item.text + " for " + item.mealType} </li>
                ))}
            </ul>*/
            )
    }
}

ReactDOM.render(<FoodList />, contentNode);
