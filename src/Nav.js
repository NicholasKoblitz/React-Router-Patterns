import React from "react";
import { NavLink } from "react-router-dom";
import DogDetails from "./DogDetails";
import './Nav.css';

const Nav = ({names}) => {

    return (
        <div id="nav">
            <NavLink exact to="/dogs">Home</NavLink>
            {names.map(name => (
                <NavLink exact to={`/dogs/${name}`} key={name}>{name}</NavLink>
            ))}
        </div>
    )
}

export default Nav;