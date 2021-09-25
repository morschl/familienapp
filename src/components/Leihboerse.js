import React, { Component } from 'react';

import './Leihboerse.css'

export default class Leihboerse extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };
    }

    render() {
        return (
            <div>Leihbörse</div>
        )
    }
}