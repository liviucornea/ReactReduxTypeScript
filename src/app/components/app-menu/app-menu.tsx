import React from 'react';
import {Link, NavLink} from "react-router-dom";
import './_app-menu.scss';
import {useSelector} from "react-redux";
import {selectUser} from "../../../features/user/userSlice";

export default function AppMenu() {
    const user = useSelector(selectUser);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                {/* <a className="navbar-brand" href="!#">Navbar</a>*/}
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-item nav-link active menu-item" to="/home"
                                 exact activeStyle={{color: 'blue'}}>Home</NavLink>
                        <NavLink className="nav-item nav-link active menu-item" to="/feature"
                                 exact activeStyle={{color: 'green'}}>Feature</NavLink>
                        <NavLink className="nav-item nav-link active menu-item" to="/counter"
                                 exact activeStyle={{color: 'blue'}}>Counter</NavLink>
                        <NavLink className="nav-item nav-link active menu-item" to="/user"
                                 exact activeStyle={{color: 'blue'}}>User</NavLink>
                        <NavLink className="nav-item nav-link active menu-item" to="/entryForm"
                                 exact activeStyle={{color: 'blue'}}
                        >Form Validation</NavLink>
                        <Link className="nav-item nav-link active menu-item" to="/todos">To do</Link>
                        <NavLink className="nav-item nav-link active menu-item" to="/topics"
                                 exact activeStyle={{color: 'green'}}
                        >Nested Routes</NavLink>
                        <NavLink className="nav-item nav-link active menu-item" to="/aiurea"
                                 exact activeStyle={{color: 'green'}}
                        >Aiurea</NavLink>
                        {/* <a className="nav-item nav-link disabled menu-item" href="!#" aria-disabled="true">Disabled</a>*/}
                    </div>
                </div>
            </nav>
        </div>
    )
}