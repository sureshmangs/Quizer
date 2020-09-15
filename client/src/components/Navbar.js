import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <div className="navbar navbar-expand-md bg-dark navbar-dark pt-0 pb-0" >
                <Link className="navbar-brand pl-3" to="/"><img src={require('../images/myLogo_100.png')} alt="Quizer" /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto mr-5 pr-4">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/leaderboard" >LEADER BOARD</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">LOGIN</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Navbar;