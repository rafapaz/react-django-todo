import React from 'react'
import axios from 'axios'
import Menu from './Menu';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

import './css/w3.css'

const URL = 'http://localhost:8080/api/todos/'

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {description : '', items : []}
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);

        this.refresh();
    }

    refresh() {
        axios.get(URL)
            .then(resp => this.setState({description : '', items : resp.data}))
    }

    handleAdd() {
        axios.post(URL, { 'desc' : this.state.description })
            .then(resp => this.refresh());        
    }

    handleChange(e) {
        this.setState({description: e.target.value});
    }

    handleRemove(item) {        
        axios.delete(URL + item.id + '/')
            .then(resp => this.refresh());
    }

    render() {
        return (   
            <div>
                <Menu />
                <h1>Todo</h1>
                <TodoForm description={this.state.description} handleChange={this.handleChange} handleAdd={this.handleAdd} />
                <TodoList list={this.state.items} handleRemove={this.handleRemove} />
            </div>
        );
    }
}

export default Todo;