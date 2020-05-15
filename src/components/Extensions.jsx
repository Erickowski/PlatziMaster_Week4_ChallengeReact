import React from 'react';

import CardExtension from './CardExtension';
import '../assets/css/Extensions.scss';

const Extensions = () => {
    const browsers = [
        {
            name: 'Chrome',
            version: 62,
            image: 'src/assets/static/logo-chrome.svg'
        },
        {
            name: 'Firefox',
            version: 55,
            image: 'src/assets/static/logo-firefox.svg'
        },
        {
            name: 'Opera',
            version: 46,
            image: 'src/assets/static/logo-opera.svg'
        }
    ]
    return (
        <>
            <h2 className="extension__title">Downland the extension</h2>
            <p className="extension__description">We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.</p>
            <ul className="extension__cards">
                {browsers.map((browser, index) => {
                    return(
                        <CardExtension key={'feature ' + index} browser={browser} />
                )})}
            </ul>
        </>
    );
}

export default Extensions;