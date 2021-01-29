import React from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import {FirstScreen} from '../components/FirstScreen'
import {SecondScreen} from '../components/SecondScreen'
import {ThirdScreen} from '../components/ThirdScreen'
import {WelcomeScreen} from '../components/WelcomeScreen'
import { Navbar } from '../ui/navbar/Navbar'

export const AppRouter = () => {
    return (
        <Router>
            
            <Navbar/>
            
            <div className="container mt-5">
                <Switch>
                    <Route exact path="/FirstScreen" component={FirstScreen}></Route>
                    <Route exact path="/SecondScreen" component={SecondScreen}></Route>
                    <Route exact path="/ThirdScreen" component={ThirdScreen}></Route>
                    <Route exact path="/" component={WelcomeScreen}></Route>

                    <Redirect exact to="/" />
                </Switch>
            </div>
        </Router>
    )
}
