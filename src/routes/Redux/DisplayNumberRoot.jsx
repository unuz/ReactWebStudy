import React, { Component } from 'react';
import DisplayNumber from '../containers/DisplayNumberWrap';

export default class DisplayNumberRoot extends Component {
    render() {
        return (
            <div className="div-redux">
                <h1>DisplayNumberRoot</h1>
                <DisplayNumber unit="kg" />
            </div>
        );
    }
}