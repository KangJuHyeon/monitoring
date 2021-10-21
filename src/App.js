import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './components/Login';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Route exact path="/" component={Login} />
                <Route exact path="/dashboard" component={Dashboard} />
            </div>
        </BrowserRouter>
    );
}
export default App;
