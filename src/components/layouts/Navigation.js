import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";

import FavoritesContext from "../../store/favorit-context";

import './Navigation.css';

function Navigation() {
    const favoritesCont = useContext(FavoritesContext);
    console.log(favoritesCont);

    return (
        <header className="header">
            <div className="logo">React App</div>
        <nav>
            <ul>
                <li><Link to="/">All Pages</Link></li>
                <li><Link to="/new-page">Add New Page</Link></li>
                <li><Link to="/favorit-page">
                    Favorit Page
                    <span className="badge"> {favoritesCont.totalFavorites}</span>
                    </Link>
                </li>
            </ul>
        </nav>
        </header>
    );
}

export default Navigation;