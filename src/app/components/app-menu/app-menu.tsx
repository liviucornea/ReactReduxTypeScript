import React from 'react';
import {Link} from "react-router-dom";
import   './_app-menu.scss';

export default function AppMenu() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="!#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link active menu-item" to="/home">Home</Link>
                    <Link className="nav-item nav-link active menu-item" to="/feature">Feature</Link>
                    <Link className="nav-item nav-link active menu-item" to="/counter">Counter</Link>
                    <Link className="nav-item nav-link active menu-item" to="/user">User</Link>
                    <Link className="nav-item nav-link active menu-item" to="/entryForm">Form Validation</Link>
                    <Link className="nav-item nav-link active menu-item" to="/todos">To Do</Link>
                    <a className="nav-item nav-link disabled menu-item" href="!#" aria-disabled="true">Disabled</a>
                </div>
            </div>
        </nav>
    )
}