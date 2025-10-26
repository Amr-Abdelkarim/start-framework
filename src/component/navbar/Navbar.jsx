import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { About } from './../../../../../../Home-test/project-1/src/components/About';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg ">
                <div className="container">
                    <Link className="navbar-brand " to="/beginning">Start Framework</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/portfolio">Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>

        </div>
    )
}
