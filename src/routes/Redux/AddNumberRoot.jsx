import React, { Component } from 'react';
import AddNumber from '../containers/AddNumberWrap';
import MinusNumber from '../containers/MinusNumberWrap';

export default class AddNumberRoot extends Component {
    render() {
        return (
            <div className="div-redux">
                <h1>AddNumberRoot</h1>
                <AddNumber />
                <MinusNumber />
            </div>
        );
    }
}