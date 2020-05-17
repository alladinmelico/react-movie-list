import React from 'react' 

const Header = () => {
    return (
        <nav>
            <ul id="menu-list">
                <li><a href="">Home</a></li>
                <li><a href="">Favorites</a></li>
            </ul>
            <div id="login">
                <a href="">Login</a>
            </div>
        </nav>
    )
}

export default Header