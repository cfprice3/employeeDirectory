import React from 'react';
import "../styles/Header.css";

function Header () {
    return (
        <div className="header">
            <h1>Employee Directory</h1>
            <p>Use Search Box below to find employee by name, or click on category header to reverse the order of the list.</p>
        </div>
        )
}

export default Header;