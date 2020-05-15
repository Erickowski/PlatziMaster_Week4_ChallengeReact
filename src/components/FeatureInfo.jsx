import React from 'react';

const FeatureInfo = props => {
    // console.log(props);
    return (
        <>
            <picture className="feature__picture">
                <div className="feature__picture--background"></div>
                <img className="feature__picture--image" src={props.features.image} alt=""/>
            </picture>
            <h3 className="feature__subtitle">{props.features.title}</h3>
            <p className="feature__subdescription">{props.features.description}</p>
        </>
    );
}

export default FeatureInfo;