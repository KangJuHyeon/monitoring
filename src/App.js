import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Nav from './components/Nav';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';

function App() {
    const loginInfo = useSelector((state) => state.userReducer);
    const { isLogin, userInfo } = loginInfo;

    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Signup} />
                    <Route exact path="/login" component={Login} />
                    <React.Fragment>
                        <div>
                            <Nav isLogin={isLogin} />
                            <Route
                                exact
                                path="/dashboard"
                                render={() => (
                                    <Dashboard
                                        isLogin={isLogin}
                                        userInfo={userInfo}
                                    />
                                )}
                            />
                            <Route
                                exact
                                path="/settings"
                                render={() => <Settings isLogin={isLogin} />}
                            />
                        </div>
                    </React.Fragment>
                </Switch>
            </div>
        </BrowserRouter>
    );
}
export default App;
