import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Todo from './Todo';
import About from './About';
import Login from './Login';
import Logout from './Logout';
import Erro404 from './Erro404';


class MyRoute extends React.Component {
    render() {
        const username = localStorage.getItem('@todo-app/username');
        if (username !== null) {
            return (            
                    <BrowserRouter>
                        <Switch>
                            <Route path='/' exact={true} component={Todo} />
                            <Route path='/about' component={About} />
                            <Route path='/logout' component={Logout} />
                            <Route path="*" component={Erro404} />
                        </Switch>
                    </BrowserRouter>
            );
        } else {
            return (            
                <BrowserRouter>
                    <Switch>
                        <Route path='*' exact={true} component={Login} />                        
                    </Switch>
                </BrowserRouter>
        );
        }
    }
}

export default MyRoute;