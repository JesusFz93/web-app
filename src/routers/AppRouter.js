import React from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import {FirstScreen} from '../components/screens/FirstScreen'
import {SecondScreen} from '../components/screens/SecondScreen'
import {ThirdScreen} from '../components/screens/ThirdScreen'
import {WelcomeScreen} from '../components/screens/WelcomeScreen'
import {Ejercicios} from '../components/screens/Ejercicios'
import { Navbar } from '../components/ui/navbar/Navbar'
import { LoginScreen } from '../components/auth/LoginScreen'

export const AppRouter = () => {
    return (
        <Router>
            
            <Navbar/>
            
            <div className="container mt-5">
                <Switch>
                    <Route exact path="/FirstScreen" component={FirstScreen}></Route>
                    <Route exact path="/SecondScreen" component={SecondScreen}></Route>
                    <Route exact path="/ThirdScreen" component={ThirdScreen}></Route>
                    <Route exact path="/Ejercicios" component={Ejercicios}></Route>
                    <Route exact path="/LoginScreen" component={LoginScreen}></Route>
                    <Route exact path="/" component={WelcomeScreen}></Route>

                    <Redirect exact to="/" />
                </Switch>
            </div>
        </Router>
    )
}
