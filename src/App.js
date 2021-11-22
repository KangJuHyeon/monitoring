import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Nav from './components/Nav';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Add_monitoring from './pages/Add_monitoring';
import NotFound from './pages/NotFound';

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
                            <Route
                                exact
                                path="/add"
                                render={() => <Add_monitoring />}
                            />
                            <Route render={() => <NotFound />} />
                        </div>
                    </React.Fragment>
                </Switch>
            </div>
        </BrowserRouter>
    );
}
export default App;
