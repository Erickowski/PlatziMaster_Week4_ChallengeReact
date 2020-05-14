import React from 'react';

const CardExtension = props => {
    return (
        <div className="extension__card">
            <picture className="extension__card--image">
                <img src={props.browser.image} alt=""/>
            </picture>
            <h3 className="extension__card--title">Add to {props.browser.name}</h3>
            <h4 className="extension__card--subtitle">Minimum version {props.browser.version}</h4>
            <span className="extension__card--division"></span>
            <button className="extension__card--button">Add & Install Extension</button>
        </div>
    );
}

export default CardExtension;