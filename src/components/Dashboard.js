import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import React, { Component } from 'react';

import './Dashboard.css'
import Netzwerk from './Netzwerk';
import Veranstaltungen from './Veranstaltungen';
import Leihboerse from './Leihboerse';

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
            return (<Netzwerk />)
        } else if (this.state.text === "veranstaltungen") {
            return (<Veranstaltungen />)
        } else if (this.state.text === "leihboerse") {
            return (<Leihboerse />)
        } else {
            return (

                <Container className='container-fluid'>
                    <Row className="justify-content-md-center">
                        <Col xs={2}>
                            <Card style={{ border: 'none' }}>
                                <Card.Img variant="top" src="./logo.svg" onClick={this.getThemen.bind(this, "nestwerken")} />
                                <Card.Body>
                                    <Card.Title style={{ textAlign: 'center' }}>Nestwerken</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={2}>
                            <Card style={{ border: 'none' }}>
                                <Card.Img variant="top" src="./logo.svg" onClick={this.getThemen.bind(this, "veranstaltungen")} />
                                <Card.Body>
                                    <Card.Title style={{ textAlign: 'center' }}>Kurse & Veranstaltungen</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col xs={2}>
                            <Card style={{ border: 'none' }}>
                                <Card.Img variant="top" src="./logo.svg" onClick={this.getThemen.bind(this, "leihboerse")} />
                                <Card.Body>
                                    <Card.Title style={{ textAlign: 'center' }}>Leihbörse</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={2}>
                            <Card style={{ border: 'none' }}>
                                <Card.Img variant="top" src="./logo.svg" onClick={this.getThemen.bind(this, "spielplatztork")} />
                                <Card.Body>
                                    <Card.Title style={{ textAlign: 'center' }}>Spielplatztork</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            )
        }
    }
}