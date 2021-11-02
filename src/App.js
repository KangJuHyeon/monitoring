import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Login from './components/Login';
import Nav from './components/Nav';
import main from './components/main';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Login} />
                    <div>
                        <Nav />
                        <Route exact path="/dashboard" component={main} />
                    </div>
                </Switch>
            </div>
        </BrowserRouter>
    );
}
export default App;
