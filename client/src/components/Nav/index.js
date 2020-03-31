import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (

    <nav className="navbar navbar-expand-lg text-light">
            <div className="container">
                <Link className="navbar-brand" to="/">My Menu</Link>
                <ul className="navbar-nav">
                <li className="nav-item">
                        <Link
                            to="/login"
                            className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
                        > Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/recipe"
                            className={window.location.pathname === "/recipe" ? "nav-link active" : "nav-link"}
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