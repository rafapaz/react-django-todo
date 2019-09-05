import React from 'react'
import Menu from './Menu';
import './css/w3.css'

class Erro404 extends React.Component {
    render() {
        return ( 
            <div>
                <Menu />         
                <h1>Erro... página não encontrada!</h1>  
            </div>
        );
    }
}

export default Erro404;