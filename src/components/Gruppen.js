import {Accordion} from 'react-bootstrap'
import {FormControl} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {InputGroup} from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Component} from 'react';
import React from 'react';
import './Gruppen.css';

export default class Gruppen extends Component {

    constructor(props) {
        super();
        this.getGruppenFragen = this.getGruppenFragen.bind(this);
        /*this.state = {
            text:
        }*/
    }

    addAntwort(antwort) {
        this.setState({
            text: <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Jemand Lust auf Suedviertelspielplatz heut Nachmittag?</Accordion.Header>
                    <Accordion.Body>
                        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="48px"
                             viewBox="0 0 24 24" width="48px" fill="#000000">
                            <g>
                                <rect fill="none" height="24" width="24"/>
                            </g>
                            <g>
                                <path
                                    d="M20,2H4.01c-1.1,0-2,0.9-2,2L2,19.58c0,0.89,1.08,1.34,1.71,0.71L6,18h14c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M12,6 c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2S10.9,6,12,6z M16,14H8v-0.57c0-0.81,0.48-1.53,1.22-1.85C10.07,11.21,11.01,11,12,11 c0.99,0,1.93,0.21,2.78,0.58C15.52,11.9,16,12.62,16,13.43V14z"/>
                            </g>
                        </svg>
                        &nbsp;Suse und Ella hier. Wir sind ab 16:00 Uhr da.
                        <hr/>
                    </Accordion.Body>
                    <Accordion.Body>
                        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="48px"
                             viewBox="0 0 24 24" width="48px" fill="#000000">
                            <g>
                                <rect fill="none" height="24" width="24"/>
                            </g>
                            <g>
                                <path
                                    d="M20,2H4.01c-1.1,0-2,0.9-2,2L2,19.58c0,0.89,1.08,1.34,1.71,0.71L6,18h14c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M12,6 c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2S10.9,6,12,6z M16,14H8v-0.57c0-0.81,0.48-1.53,1.22-1.85C10.07,11.21,11.01,11,12,11 c0.99,0,1.93,0.21,2.78,0.58C15.52,11.9,16,12.62,16,13.43V14z"/>
                            </g>
                        </svg>
                        &nbsp;Tim und Jannis kommen auch gerne :) Bis spaeter.
                        <hr/>
                    </Accordion.Body>
                    <Accordion.Body>
                        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="48px"
                             viewBox="0 0 24 24" width="48px" fill="#000000">
                            <g>
                                <rect fill="none" height="24" width="24"/>
                            </g>
                            <g>
                                <path
                                    d="M20,2H4.01c-1.1,0-2,0.9-2,2L2,19.58c0,0.89,1.08,1.34,1.71,0.71L6,18h14c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M12,6 c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2S10.9,6,12,6z M16,14H8v-0.57c0-0.81,0.48-1.53,1.22-1.85C10.07,11.21,11.01,11,12,11 c0.99,0,1.93,0.21,2.78,0.58C15.52,11.9,16,12.62,16,13.43V14z"/>
                            </g>
                        </svg>
                        &nbsp;Julia und Hannah kommen auch. So gegen 16:30 Uhr.
                        <hr/>
                    </Accordion.Body>
                    <Accordion.Body>
                        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="48px"
                             viewBox="0 0 24 24" width="48px" fill="#000000">
                            <g>
                                <rect fill="none" height="24" width="24"/>
                            </g>
                            <g>
                                <path
                                    d="M20,2H4.01c-1.1,0-2,0.9-2,2L2,19.58c0,0.89,1.08,1.34,1.71,0.71L6,18h14c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M12,6 c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2S10.9,6,12,6z M16,14H8v-0.57c0-0.81,0.48-1.53,1.22-1.85C10.07,11.21,11.01,11,12,11 c0.99,0,1.93,0.21,2.78,0.58C15.52,11.9,16,12.62,16,13.43V14z"/>
                            </g>
                        </svg>
                        &nbsp;Wir kommen auch gleich vorbei :)
                        <hr/>
                    </Accordion.Body>
                    <Accordion.Body>
                        <Form>
                            <Row className="align-items-center">
                                <Col xs="auto">
                                    <Form.Label htmlFor="inlineFormInput">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24"
                                             width="48px" fill="#000000">
                                            <path d="M0 0h24v24H0V0z" fill="none"/>
                                            <path
                                                d="M22 4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4zm-6 7h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3H8c-.55 0-1-.45-1-1s.45-1 1-1h3V6c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z"/>
                                        </svg>
                                    </Form.Label>
                                </Col>
                                <Col>
                                    <InputGroup>
                                        <FormControl as="textarea" fluid="true" aria-label="With textarea"/>
                                    </InputGroup>
                                </Col>
                                <Col xs="auto">
                                    <Button type="submit" className="mb-2">
                                        Antworten
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Alleinerziehender Vater hier. Suche Gleichgesinnte.</Accordion.Header>
                    <Accordion.Body>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        });
    }

    getGruppenFragen(...cats) {
        if (cats[0] === null) {
            return (
                <div>Bitte oben eine Gruppe auswählen</div>
            )
        } else if (cats[0] === "Geistviertel") {
            return (
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Kann mir jemand morgen einen Kindersitz leihen?</Accordion.Header>
                        <Accordion.Body>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Brauche für morgen einen Babysitter, kennt jemand einen zuverlässigen?</Accordion.Header>
                        <Accordion.Body>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            )
        } else if (cats[0] === "Kreuzviertel") {
            return (
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Wo ist der nächste Laden wo es Windeln gibt?</Accordion.Header>
                        <Accordion.Body>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Kann mir jemand einen Kinderarzt hier im Viertel empfehlen?</Accordion.Header>
                        <Accordion.Body>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            )
        } else if (cats[0] === "Martiniviertel") {
            return (
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Wo ist der nächste Laden wo es Windeln gibt?</Accordion.Header>
                        <Accordion.Body>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Kann mir jemand einen Kinderarzt hier im Viertel empfehlen?</Accordion.Header>
                        <Accordion.Body>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            )
        }
    }

    render() {
        return this.getGruppenFragen(this.props.cat);
    }
}