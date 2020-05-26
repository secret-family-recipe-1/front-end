import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddRecipe from './components/AddRecipe';


const App = () => {
    return(
        <div className='App'>
            <AddRecipe />
        </div>
    )
}

export default App;