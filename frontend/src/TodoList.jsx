import React from 'react'
import './css/w3.css'

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.printRows = this.printRows.bind(this);
    }

    printRows() {
        return this.props.list.map(e => 
        <tr key={e.id}>
            <td>{e.desc}</td>
            <td><button onClick={() => this.props.handleRemove(e)}>Delete</button></td>
        </tr>
        );         
    }

    render() {
        return (
            <table className="w3-table">
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>                    
                    {this.printRows()}
                </tbody>
            </table>
        );
    }
}

export default TodoList;