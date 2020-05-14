import React from 'react';

const Feature = () => {
    return (
        <section className="feature">
            <h2 className="feature__title">Features</h2>
            <p className="feature__description">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
            <ul className="feature__list">
                <li className="feature__list--item">
                    <button>Simple bookmarking</button>
                </li>
                <li className="feature__list--item">
                    <button>Speedy Searching</button>
                </li>
                <li className="feature__list--item">
                    <button>Easy Sharing</button>
                </li>
            </ul>
        </section>
    );
}

export default Feature;