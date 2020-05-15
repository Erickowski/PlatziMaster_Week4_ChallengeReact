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
        return (
            <div className="contact">
                <h3 className="contact__subtitle">35,000 + already joined</h3>
                <h2 className="contact__title">Stay up-to-date with what we're doing</h2>
                <div className="contact__email">
                    <div className="contact__email--input">
                        <input className={this.state.error} type="text" onChange={() => {this.setState({email: event.target.value})}} placeholder="Enter your email address"/>
                        <img className={this.state.error} src="src\assets\static\icon-error.svg" alt=""/>
                        <p className={"contact__email--error " + this.state.error}>Whoops, make sure it's an email</p>
                    </div>
                    <button onClick={() => (this.state.email.match(this.state.regex) ? this.setState({error: ''}) : this.setState({error: 'error'})) } className="contact__email--button">Contact Us</button>
                </div>
            </div>
        );
    }
}

export default Contact;
