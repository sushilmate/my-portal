import React, { Component } from 'react';
import './NavMenu.css';

export class NavMenu extends Component {

    render() {
        return (
            <header className="toolbar">
                <nav className="toolbar_nav">
                    <div className="toolbar_logo">
                        <a href="/">My Portal</a>
                    </div>
                    <div className="spacer">
                    </div>
                    <div>
                        <ul className="toolbar_nav_items">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/login">Login</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}