import React, { Component } from 'react';

import notify  from '../js/notify';
import withSplitting from '../js/withSplitting';

const SplitMe = withSplitting(() => import('../js/SplitMe'));

class Home extends Component {
    
    state = {
        visible: false
    };

    stateClick = () => {
        this.setState({
            visible: true
        });
    };
    handleClick = () => {
        notify();
    };
    aboutClick = () => {
        this.props.history.push('/About/기본');
    };
    postClick = () => {
        this.props.history.push('/posts');
    };
    chatClick = () => {
        this.props.history.push('/chat');
    };
    render() {

        const { visible } = this.state;

        return (
            <div className="text-center">
                HOME
                <br />
                <button onClick={this.aboutClick} className="btn-default"> About </button>
                <button onClick={this.postClick} className="btn-default"> Post </button>
                <button onClick={this.chatClick} className="btn-default"> Chat </button>
                <button onClick={this.handleClick}>Click</button>
                <button onClick={this.stateClick}>setState</button>
                {visible && <SplitMe></SplitMe>}
            </div>
        );
    }
};

export default Home;
