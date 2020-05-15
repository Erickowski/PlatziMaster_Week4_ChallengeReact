import React from 'react';

import '../assets/css/hero.scss';

const Hero = () => {
    return (
        <section className='hero'>
            <picture className="hero__picture">
                <div className="hero__picture--background"></div>
                <img className="hero__picture--image" src="src/assets/static/illustration-hero.svg" alt=""/>
            </picture>
            <div className="hero__content">
                <h1 className="hero__content--title">A Simple Bookmark Manager</h1>
                <p className="hero__content--description">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                <div className="hero__content--buttons">
                    <button className="chrome">Get it on Chrome</button>
                    <button className="firefox">Get it on Firefox</button>
                </div>
            </div>
        </section>
    );
}

export default Hero;