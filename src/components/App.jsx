import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Feature from './Feature';
import Extensions from './Extensions';
import Faq from './Faq';
import Contact from './Contact';
import Footer from './Footer';

const App = props => {
    return (
        <>
            <Header />
            <Hero />
            <Feature features={props.features} />
            <Extensions />
            <Faq buttons={props.buttons} />
            <Contact/>
            <Footer />
        </>
    )
};

export default App;
