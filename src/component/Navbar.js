import React from 'react'
import {Link} from "react-router-dom";
    const Navbar=()=>{
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">News</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>
            </div>
        )
    }
    
export default Navbar
