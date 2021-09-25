import { ButtonToolbar, Button } from 'react-bootstrap'
import React, { Component } from 'react';

import './Netzwerks.css'

import FragenUndAntworten from './FragenUndAntworten';
export default class Netzwerk extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: <FragenUndAntworten cat={null}/>
        };
    }


    getFragenUndAntworten(param) {
         this.setState({
            text: <FragenUndAntworten cat={param}/>
         });
    }


    render() {
        return (
            <div className="container-fluid">
                <div>
                    <div>
                        <ButtonToolbar>
                            <Button variant="success" onClick={this.getFragenUndAntworten.bind(this, "Ernährung")}>Ernährung</Button>
                            <Button variant="success" onClick={this.getFragenUndAntworten.bind(this, "Gesundheit")}>Gesundheit</Button>
                            <Button variant="success" onClick={this.getFragenUndAntworten.bind(this, "Spielpartner")}>Spielpartner</Button>
                            <Button variant="success" onClick={this.getFragenUndAntworten.bind(this, "Betreuung")}>Betreuung</Button>
                        </ButtonToolbar>
                        <div >
                            {this.state.text}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}