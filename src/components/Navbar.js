import React from 'react'
import {  Link } from "react-router-dom"

const Navbar =() => {

        return (
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" >

                    <div className='container-fluid'>
                        <Link className="navbar-brand" to="/">News Dog</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">

                            <ul className="navbar-nav mr-auto mb-2 mb-lg-0">

                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/World">World</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Business">Business</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Entertainment">Entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Science&Technology">Science and Techology</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Sports">Sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Cryptocurrency">Cryptocurrency</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </nav>
                
        )
    
}

export default Navbar;