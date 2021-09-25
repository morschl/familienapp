import {Container, Row, Col, Card} from 'react-bootstrap'
import React, {Component} from 'react';

import './Dashboard.css'

export default class Dashboard extends Component {
    render() {
        return (
            <Container className='container-fluid'>
                <Row>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="./logo.svg"/>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="./logo.svg"/>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className='col-sm'>
                        <Card>
                            <Card.Img variant="top" src="./logo.svg"/>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="./logo.svg"/>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}