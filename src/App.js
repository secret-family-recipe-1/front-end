import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from './components/Login'
import SignUp from './components/SignUp'
import Recipe from './components/Recipe';

const intial = {
    title:'grandma book',
    source: 'grandma',
    ingredients: 'some good food',
    instructions: 'the book',
    category: ''
 }

const App = () => {
    return(
        <div className='App'>
            Food is HERE!!!
            <Recipe {...intial} />
            {/* Routes:  */}
        
            <Router>
                <Switch>
                    <Route path='/login'>
                <Login />
                </Route>

            <Route path='/signUp'>
                <SignUp />
                </Route>
                </Switch>
            </Router>
          
        </div>
    )
}

export default App;