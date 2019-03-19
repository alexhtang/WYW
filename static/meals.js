'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var contentNode = document.getElementById("mealcontent");

var FoodList = function (_React$Component) {
    _inherits(FoodList, _React$Component);

    function FoodList(props) {
        _classCallCheck(this, FoodList);

        var _this = _possibleConstructorReturn(this, (FoodList.__proto__ || Object.getPrototypeOf(FoodList)).call(this, props));

        _this.state = {
            items: [],
            selectValue: 'Breakfast',
            text: ''
        };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSelectChange = _this.handleSelectChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(FoodList, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h3',
                    null,
                    'Meals'
                ),
                React.createElement(MealList, { items: this.state.items }),
                React.createElement(
                    'form',
                    { onSubmit: this.handleSubmit },
                    React.createElement('input', {
                        onChange: this.handleChange,
                        value: this.state.text
                    }),
                    React.createElement(
                        'select',
                        {
                            defaultValue: 'Breakfast',
                            value: this.state.selectValue,
                            onChange: this.handleSelectChange },
                        React.createElement(
                            'option',
                            { value: 'Breakfast' },
                            'Breakfast'
                        ),
                        React.createElement(
                            'option',
                            { value: 'Lunch' },
                            'Lunch'
                        ),
                        React.createElement(
                            'option',
                            { value: 'Dinner' },
                            'Dinner'
                        ),
                        React.createElement(
                            'option',
                            { value: 'Snack' },
                            'Snack'
                        )
                    ),
                    React.createElement(
                        'p',
                        null,
                        this.state.selectValue
                    ),
                    React.createElement(
                        'button',
                        null,
                        'Add Meal'
                    )
                )
            );
        }
    }, {
        key: 'handleChange',
        value: function handleChange(e) {
            this.setState({ text: e.target.value });
        }
    }, {
        key: 'handleSelectChange',
        value: function handleSelectChange(e) {
            this.setState({ selectValue: e.target.value });
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            e.preventDefault();
            if (this.state.text.length === 0) {
                return;
            }

            var newItem = {
                id: Date.now(),
                text: this.state.text,
                mealType: this.state.selectValue
            };

            this.setState(function (prev) {
                return {
                    items: prev.items.concat(newItem),
                    text: ''
                };
            });
        }
    }]);

    return FoodList;
}(React.Component);

var MealList = function (_React$Component2) {
    _inherits(MealList, _React$Component2);

    function MealList() {
        _classCallCheck(this, MealList);

        return _possibleConstructorReturn(this, (MealList.__proto__ || Object.getPrototypeOf(MealList)).apply(this, arguments));
    }

    _createClass(MealList, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'ul',
                null,
                this.props.items.map(function (item) {
                    return React.createElement(
                        'li',
                        { key: item.id },
                        item.text + " for " + item.mealType,
                        ' '
                    );
                })
            );
        }
    }]);

    return MealList;
}(React.Component);

ReactDOM.render(React.createElement(FoodList, null), contentNode);