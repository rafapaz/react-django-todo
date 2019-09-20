import React from 'react'
import axios from 'axios'
import URL from './Global'
import Login from './Login'
import './css/w3.css'
import './css/todo.css'

class Logout extends React.Component {
    constructor(props) {
        super(props);

        localStorage.removeItem('@todo-app/username');
        localStorage.removeItem('@todo-app/token');
        window.location.href = '/'
    }

    render() {
        return (   
            <Login />
        );
    }
}

export default Logout;