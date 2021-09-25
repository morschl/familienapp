import React, { Component } from 'react';

import './SpielplatzTalk.css'

export default class SpielplatzTalk extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };
    }

    render() {
        return (
            <div>Spielplatz-Talk</div>
        )
    }
}