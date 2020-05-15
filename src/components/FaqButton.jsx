import React, { Component } from 'react';

class FaqButton extends Component {
    constructor(props) {
        super(props);
        this.state = {active : ''};
    }
    render() {
        return (
        <li className={"faq__list--item " + this.state.active } onClick={() => {(this.state.active == '') ? this.setState({active: 'active'}) : this.setState({active: ''})}}>
            <div>
                <h3>{this.props.button.question}</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                    <path fill="none" stroke="#5267DF" strokeWidth="3" d="M1 1l8 8 8-8"/>
                </svg>
            </div>
            <p>{this.props.button.answer}</p>
        </li>
        );
    }
}

export default FaqButton;