import React from 'react';
import { Link, NavLink } from 'react-router-dom';
//import { AuthContext } from '../../auth/AuthContext';
//import { types } from '../../types/types';

export const Navbar = () => {

    const Usuario = 'Jesus';

    const onClick = () => {
        console.log('Te saliste xd');
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Web App
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/FirstScreen"
                    >
                        FirstScreen
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/SecondScreen"
                    >
                        SecondScreen
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/ThirdScreen"
                    >
                        ThirdScreen
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/Ejercicios"
                    >
                        Ejercicios
                    </NavLink>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="/" role="button" aria-haspopup="true" aria-expanded="false">Almacenamiento</a>
                        <div className="dropdown-menu">
                        <NavLink activeClassName="active" className="dropdown-item" exact to="/FirstScreen">Normal</NavLink>
                        <div className="dropdown-divider"></div>
                        <NavLink activeClassName="active" className="dropdown-item" exact to="/SecondScreen">Fire Base</NavLink>
                        <NavLink activeClassName="active" className="dropdown-item" exact to="/ThirdScreen">Local Storage</NavLink>
                        </div>
                    </li>
                    
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">

                    <span className="nav-item nav-link text-info"> 
                    {Usuario}
                    </span>

                    <button 
                        className="btn btn-success"
                        onClick={onClick}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}
