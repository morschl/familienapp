import {Container, Row, Col, Card} from 'react-bootstrap'
import React, {Component} from 'react';

import './Dashboard.css'
import Netzwerk from './Netzwerk';
import Veranstaltungen from './Veranstaltungen';
import Leihboerse from './Leihboerse';
import SpielplatzTalk from "./SpielplatzTalk";

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: null
        };
    }

    getThemen(param) {
        this.setState({
            text: param
        });
    }

    render() {
        if (this.state.text === "nestwerken") {
            return (<Netzwerk/>)
        } else if (this.state.text === "veranstaltungen") {
            return (<Veranstaltungen/>)
        } else if (this.state.text === "leihboerse") {
            return (<Leihboerse/>)
        } else if (this.state.text === "spielplatztalk") {
            return (<SpielplatzTalk/>)
        } else {
            return (
                <Container className='container-fluid'>
                    <Row className="justify-content-md-center">
                        <Col xs={2}>
                            <Card style={{border: 'none'}}>
                                <Card.Img variant="top" src="./nest.svg"
                                          onClick={this.getThemen.bind(this, "nestwerken")}/>
                                <Card.Body>
                                    <Card.Title style={{textAlign: 'center'}}>Nestwerken</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={2}>
                            <Card style={{border: 'none'}}>
                                <Card.Img variant="top" src="./kalender.svg"
                                          onClick={this.getThemen.bind(this, "veranstaltungen")}/>
                                <Card.Body>
                                    <Card.Title style={{textAlign: 'center'}}>Kurse & Veranstaltungen</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col xs={2}>
                            <Card style={{border: 'none'}}>
                                <Card.Img variant="top" src="./tauschboerse.svg"
                                          onClick={this.getThemen.bind(this, "leihboerse")}/>
                                <Card.Body>
                                    <Card.Title style={{textAlign: 'center'}}>Tauschen & Leihen</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={2}>
                            <Card style={{border: 'none'}}>
                                <Card.Img variant="top" src="./spielplatz.svg"
                                          onClick={this.getThemen.bind(this, "spielplatztalk")}/>
                                <Card.Body>
                                    <Card.Title style={{textAlign: 'center'}}>Spielplatz-Talk</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            )
        }
    }
}