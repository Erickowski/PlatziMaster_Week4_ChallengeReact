import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Feature from './Feature';
import Extensions from './Extensions';

const App = props => {
    return (
        <>
            <Header />
            <Hero />
            <Feature features={props.features} />
            <Extensions />
        </>
    )
};

export default App;
