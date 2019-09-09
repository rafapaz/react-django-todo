import React from 'react'
import './css/w3.css'

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.printRows = this.printRows.bind(this);
        this.getSortFunc = this.getSortFunc.bind(this);
        this.handleChangeOrderBy = this.handleChangeOrderBy.bind(this);
        this.state = {orderBy: ''};
    }

    orderByItemAsc(a, b) { return (a.desc.toLowerCase() > b.desc.toLowerCase()) ? 1 : -1 }
    orderByItemDesc(a, b) { return (a.desc.toLowerCase() < b.desc.toLowerCase()) ? 1 : -1 }
    orderByCatAsc(a, b) { return (a.category.name.toLowerCase() > b.category.name.toLowerCase()) ? 1 : -1 }
    orderByCatDesc(a, b) { return (a.category.name.toLowerCase() < b.category.name.toLowerCase()) ? 1 : -1 }

    getSortFunc() {
        switch (this.state.orderBy) {
            case 'item asc':
                return this.orderByItemAsc;
                break;
            case 'item desc':
                return this.orderByItemDesc;
                break;
            case 'category asc':
                return this.orderByCatAsc;
                break;
            case 'category desc':
                return this.orderByCatDesc;
                break;            
            default:
               return this.orderByItemAsc;
        }
    }

    handleChangeOrderBy(str) {
        this.setState({orderBy: str});
    }

    printRows() {
        var sortFunc = this.getSortFunc();

        return this.props.list
        .sort(sortFunc)
        .map(e => 
        <tr key={e.id}>
            <td>{e.desc}</td>
            <td>{(e.category) ? e.category.name : 'Nenhuma'}</td>
            <td><button onClick={() => this.props.handleRemove(e)}>Delete</button></td>
        </tr>
        );         
    }

    render() {
        return (
            <table className="w3-table">
                <thead>
                    <tr>
                        <th><a href="#" onClick={() => this.handleChangeOrderBy((this.state.orderBy === "item asc") ? "item desc" : "item asc")} >Descrição</a></th>
                        <th><a href="#" onClick={() => this.handleChangeOrderBy((this.state.orderBy === "category asc") ? "category desc" : "category asc")} >Categoria</a></th>
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