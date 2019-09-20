import React from 'react'
import './css/w3.css'
import './css/todo.css'

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.printCategories = this.printCategories.bind(this);
    }

    printCategories() {
        return this.props.categories.map(e => <option key={e.id} value={e.id}>{e.name}</option>);
    }

    render() {
        return (   
            <div role="form" >
                <input id="description" onChange={this.props.handleChange} className="w3-input w3-border w3-round w3-col l5 w3-margin-right" placeholder="Add a task" value={this.props.description}></input>
                <select className="w3-input w3-border w3-round w3-col l2  w3-margin-right"  onChange={this.props.handleChangeCategory}>
                    {this.printCategories()}
                </select>
                <button onClick={this.props.handleAdd} className="w3-button w3-border w3-round ">+</button>
            </div>
        );
    }
}

export default TodoForm;