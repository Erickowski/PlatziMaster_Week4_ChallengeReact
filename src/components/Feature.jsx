import React, { Component } from 'react';

import FeatureInfo from './FeatureInfo';
import '../assets/css/feature.scss';

class Feature extends Component {
    constructor(props) {
        super(props);
        this.state = {tabIndex : '0'};
    }
    render() {
        return (
        <section className="feature">
            <h2 className="feature__title">Features</h2>
            <p className="feature__description">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
            <ul className="feature__list">
                <li className={(this.state.tabIndex == 0) ? 'feature__list--item active' : 'feature__list--item'} onClick={() => this.setState({tabIndex: '0'})}>
                    <button>Simple bookmarking</button>
                </li>
                <li className={(this.state.tabIndex == 1) ? 'feature__list--item active' : 'feature__list--item'} onClick={() => this.setState({tabIndex: '1'})}>
                    <button>Speedy Searching</button>
                </li>
                <li className={(this.state.tabIndex == 2) ? 'feature__list--item active' : 'feature__list--item'} onClick={() => this.setState({tabIndex: '2'})}>
                    <button>Easy Sharing</button>
                </li>
            </ul>
            <FeatureInfo features={this.props.features[this.state.tabIndex]} />
        </section>
        );
    }
}

export default Feature;