import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './components/Login';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/dashboard" component={Dashboard} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}
export default App;
