import React, { Component } from 'react';
import { ReactDOM } from 'react-dom';

import './SpielplatzTalk.css'

export default class SpielplatzTalk extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };
    }
    

    componentDidMount() {
        let canvas = ReactDOM.findDOMNode(this.refs.myCanvas);
        let ctx = canvas.getContext('2d');

        ctx.fillStyle = 'rgb(200,0,0)';
        ctx.fillRect(10, 10, 55, 50);
    }

    render() {
        return (
            <div>
                <canvas ref="myCanvas" width="400" height="400">
                </canvas>
                <img src="./maps.png" /></div>
        )
    }
}