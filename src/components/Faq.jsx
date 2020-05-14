import React from 'react';

import FaqButton from './FaqButton';
import '../assets/css/faq.scss';

const Faq = props => {
    return (
        <div className="faq">
            <h2 className="faq__title">Frequently Asked Questions</h2>
            <p className="faq__description">Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>
            <ul className="faq__list">
                {props.buttons.map((button, index) => {
                    return (
                        <FaqButton key={'Boton ' + index} button={button} />
                    )
                })}
            </ul>
            <button className="faq__button">More info</button>
        </div>
    );
}

export default Faq;