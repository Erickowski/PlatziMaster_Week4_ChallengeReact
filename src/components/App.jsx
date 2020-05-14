import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Feature from './Feature';
import Extensions from './Extensions';
import Faq from './Faq';

const App = props => {
    return (
        <>
            <Header />
            <Hero />
            <Feature features={props.features} />
            <Extensions />
            <Faq buttons={props.buttons} />
        </>
    )
};

export default App;
