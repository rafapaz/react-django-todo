import React from 'react'
import axios from 'axios'
import URL from './Global'
import './css/w3.css'
import './css/todo.css'

class Login extends React.Component {
    constructor(props) {
        super(props);       
    }

    saveToken(username, data) {
        localStorage.setItem('@todo-app/username', username);
        localStorage.setItem('@todo-app/token', data.token);
        window.location.reload();       
    }

    register() {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        axios.post(URL + 'api-token-auth/', { 'username': username, 'password': password })
            .then(resp => this.saveToken(username, resp.data));
    }

    render() {
        return (   
            <div role="form">
                <div className="w3-third"></div>
                <div className="w3-third w3-panel w3-border w3-round w3-padding" >
                    Register:
                    <input id="username" className="w3-input w3-border w3-round"></input>
                    <input id="password" className="w3-input w3-border w3-round"></input>
                    <button onClick={() => this.register()} className="w3-button w3-border w3-round ">Register</button>
                </div>
                <div className="w3-third"></div>
            </div>
        );
    }
}

export default Login;