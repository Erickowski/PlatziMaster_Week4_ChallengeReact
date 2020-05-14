import React from 'react';

import '../assets/css/header.scss';

// TODO: No entendi por que esto no funciona
// import logoBookmark from '../assets/static/logo-bookmark.svg';
// import menuIcon from '../assets/static/icon-hamburger.svg';

const Header = () => {
    return (
        <header className="header">
            <nav className="header__nav">
                <picture className="header__nav--logo">
                    <img src='src/assets/static/logo-bookmark.svg' alt=""/>
                </picture>
                <picture className="header__nav--menu">
                    <img src='src/assets/static/icon-hamburger.svg' alt=""/>
                </picture>
            </nav>
        </header>
    );
}

export default Header;