import React from 'react'
import { Link } from 'react-router-dom'
import './css/w3.css'

class Menu extends React.Component {
    render() {
        return (            
            <div className="w3-bar w3-black">
                <Link to="/" className="w3-bar-item w3-button">Todo</Link>
                <Link to="/about" className="w3-bar-item w3-button">About</Link>
                <Link to="/logout" className="w3-bar-item w3-button w3-right">Logout</Link>
            </div> 
        );
    }
}

export default Menu;