import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Feature from './Feature';

const App = props => {
    return (
        <>
            <Header />
            <Hero />
            <Feature features={props.features} />
        </>
    )
};

export default App;
