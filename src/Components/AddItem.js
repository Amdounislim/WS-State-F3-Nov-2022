import React, { Component } from 'react';

export default class AddItem extends Component {

    state = {
        data: ""
    }

    render() {
        return <div>
            <input type="text" onChange={(e) => this.setState({ data: e.target.value })} />
            <button onClick={() => this.props.add(this.state.data)}  >ADD</button>
        </div>;
    }
}
