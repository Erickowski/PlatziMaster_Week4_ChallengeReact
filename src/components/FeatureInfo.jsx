import React from 'react';

const FeatureInfo = props => {
    return (
        <div className="feature__picture">
            <div className="feature__picture--background"></div>
            <img className="feature__picture--image" src={props.features.image} alt=""/>
            <div>
                <h3 className="feature__subtitle">{props.features.title}</h3>
                <p className="feature__subdescription">{props.features.description}</p>
                <button className="feature__button">More info</button>
            </div>
        </div>
    );
}

export default FeatureInfo;