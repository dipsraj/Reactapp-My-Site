import React, {Component} from 'react';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                <a className="navbar-brand" href="#1">My Site</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#1">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#1">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#1">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}