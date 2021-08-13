import React, { Component } from 'react';

class Stateful extends Component {
    render() {
        constructor(props) {
            super(props);
            this.state = {
                hello: 'Hola Mundo'
            }
        }
        return (
            <h1>{this.state.hello}</h1>
        )
    }
}

export default Stateful;