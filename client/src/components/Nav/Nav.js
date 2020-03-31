import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (

<nav className="navbar navbar-expand-lg text-light">
            <div className="container">
                <Link className="navbar-brand" to="/">My Menu</Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            to="/Recipe"
                            className={window.location.pathname === "/Recipe" ? "nav-link active" : "nav-link"}
                        > Recipe</Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/saved"
                            className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                        >Saved</Link>
                    </li>
                </ul>
            </div>
        </nav>


  );
}

export default Nav;
