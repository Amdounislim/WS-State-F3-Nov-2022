import React, { Component } from 'react';

export default class Counter extends Component {
    render() {
        return <div>
            <h1>{this.props.count}</h1>
        </div>;
    }
}
