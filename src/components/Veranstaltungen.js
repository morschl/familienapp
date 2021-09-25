import React, {Component} from 'react';

import './Veranstaltungen.css'

export default class Veranstaltungen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };
    }

    render() {
        return (
            <div>Veranstaltungen & Kurse</div>
        )
    }
}