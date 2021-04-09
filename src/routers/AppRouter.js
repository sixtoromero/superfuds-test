import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { HomeScreen } from '../components/home/HomeScreen';
import { NavBar } from '../components/shared/navbar/NavBar';

export const AppRouter = () => {
    return (
        <Router>
        <div className="navbar navbar-expend-sm navbar-dark bg-dark">
            <NavBar />
            <Switch>
                <Route exact path="/home" component={HomeScreen} />
            </Switch>
        </div>
        </Router>        
    )
}
