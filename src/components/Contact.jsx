import React, { Component } from 'react';

import '../assets/css/contact.scss';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email : '',
            error : '',
            regex : /[\w\._\-]{5,30}\+?[\w]{0,10}@[\w\-\.]{3,}\.\w{2,5}/
        };
    }
    render() {
        // const variable = "erick@gmail.com"
        // console.log(variable.match(this.state.regex));
        return (
            <div className="contact">
                <h3 className="contact__subtitle">35,000 + already joined</h3>
                <h2 className="contact__title">Stay up-to-date with what we're doing</h2>
                <div className="contact__input">
                    <input className={this.state.error} type="text" onChange={() => {this.setState({email: event.target.value})}} placeholder="Enter your email address"/>
                    <p className={"contact__input--error " + this.state.error}>Whoops, make sure it's an email</p>
                </div>
                <button onClick={() => (this.state.email.match(this.state.regex) ? this.setState({error: ''}) : this.setState({error: 'error'})) } className="contact__button">Contact Us</button>
            </div>
        );
    }
}

export default Contact;
