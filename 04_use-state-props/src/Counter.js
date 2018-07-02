import React, { Component, PropTypes } from 'react';

function Content (props) {
    return <p>Content组件的props.values: {props.value}</p>
}

Content.propTypes = {
    // value: PropTypes.number.isRequired
};

export default class Counter extends Component {
    constructor () {
        super();
        this.state = {
            value: 0
        };
    }
    render () {
        return (
            <div>
                <button onClick={() => this.setState({value: this.state.value + 1})}>增加</button>
                Conuter组件的内部状态:
                <pre>{JSON.stringify(this.state, null, 2)}</pre>
                <Content value={this.state.value}/>
            </div>
        );
    }
}
