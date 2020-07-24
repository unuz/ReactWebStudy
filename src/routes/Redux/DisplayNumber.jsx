import React, { Component } from 'react';
export default class DisplayNumber extends Component {
    render() {
        return (
            <div className="div-redux">
                <h1>DisplayNumber</h1>
                <input type="text" value={this.props.number} readOnly />
                {this.props.unit}
            </div>
        );
    }
}