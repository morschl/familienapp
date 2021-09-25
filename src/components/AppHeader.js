import React, {Component} from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap'

import './AppHeader.css'
import Netzwerk from "./Netzwerk";
import FragenUndAntworten from "./FragenUndAntworten";
import Veranstaltungen from "./Veranstaltungen";
import Leihboerse from "./Leihboerse";

export default class AppHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };
    }

    getThemen(param) {
        console.log(param);
        if (param === "Nestwerken") {
            this.setState({
                text: <Netzwerk/>
            });
        }
        if (param === "Veranstaltungen") {
            this.setState({
                text: <Veranstaltungen/>
            })
        }
        if (param === "Leihbörse") {
            this.setState({
                text: <Leihboerse/>
            })
        }
    }

    render() {
        return (
            <div>
                <div>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Navbar.Brand href="#home">
                            <img className='logo' src="../logo.svg" alt=''/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#network"
                                          onClick={this.getThemen.bind(this, "Nestwerken")}>Nestwerken</Nav.Link>
                                <Nav.Link href="#events"
                                          onClick={this.getThemen.bind(this, "Veranstaltungen")}>Kurse &
                                    Veranstaltungen</Nav.Link>
                                <Nav.Link href="#shares"
                                          onClick={this.getThemen.bind(this, "Leihbörse")}>Leihbörse</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div>
                    {this.state.text}
                </div>
            </div>
        )
    }
}