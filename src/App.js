import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './components/Home'
import PrivateRoute from './components/PrivateRoute';


const App = () => {
    return (
        <div className='App'>
            Secret Family Recipes

            <Router>

                {/* Routes: */}
                <Switch>
                    <Route path='/login'>
                        <Login />
                    </Route>

                    <Route path='/signUp'>
                        <SignUp />
                    </Route>

                    <PrivateRoute path='/home' component={Home} />
                </Switch>
            </Router>

        </div>
    )
}

export default App;