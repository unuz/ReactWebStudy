import React, { Component } from "react";
import '../components/Redux.css';
import AddNumberRoot from './Redux/AddNumberRoot';
import DisplayNumberRoot from './Redux/DisplayNumberRoot';

class Redux extends Component {
    state = { number: 0  /* 초기 state number : 0 */ }
    render() {
        return (
            <div className="div-redux">
                <h1>Redux</h1>
                <AddNumberRoot />
                <DisplayNumberRoot />
            </div>
        );
    }
};

export default Redux;