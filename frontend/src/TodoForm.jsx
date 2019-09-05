import React from 'react'
import './css/w3.css'

class TodoForm extends React.Component {
    render() {
        return (   
            <div role="form">
                <input id="description" onChange={this.props.handleChange} className="w3-input w3-border w3-round w3-col l6" placeholder="Adicione uma tarefa" value={this.props.description}></input>
                <button onClick={this.props.handleAdd} className="w3-button w3-border w3-round w3-margin-left">+</button>
            </div>
        );
    }
}

export default TodoForm;