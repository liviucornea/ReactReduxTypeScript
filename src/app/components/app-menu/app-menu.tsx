import React from 'react';
import {Link} from "react-router-dom";


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
                    <Link className="nav-item nav-link active" to="/home">Home</Link>
                    <Link className="nav-item nav-link active" to="/features">Features</Link>
                    <Link className="nav-item nav-link active" to="/counter">Counter</Link>
                    <Link className="nav-item nav-link active" to="/user">User</Link>
                    <a className="nav-item nav-link disabled" href="!#" aria-disabled="true">Disabled</a>
                </div>
            </div>
        </nav>
    )
}