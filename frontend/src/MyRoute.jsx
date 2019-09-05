import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Todo from './Todo';
import About from './About';
import Erro404 from './Erro404';

class MyRoute extends React.Component {
    render() {
        return (            
                <BrowserRouter>
                    <Switch>
                        <Route path='/' exact={true} component={Todo} />
                        <Route path='/about' component={About} />
                        <Route path="*" component={Erro404} />
                    </Switch>
                </BrowserRouter>
        );
    }
}

export default MyRoute;