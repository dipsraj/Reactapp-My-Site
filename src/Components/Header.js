import React, { Component } from 'react';
import Navbar from "./Header/Navbar";

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <Navbar/>
                <div className="jumbotron">
                    <h1>{this.props.name}</h1>
                </div>
            </div>
        );
    }
}