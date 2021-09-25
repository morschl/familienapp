import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap'

import './AppHeader.css'
import Netzwerk from "./Netzwerk";
import Veranstaltungen from "./Veranstaltungen";
import Leihboerse from "./Leihboerse";
import Dashboard from "./Dashboard";
import SpielplatzTalk from "./SpielplatzTalk";

export default class AppHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: <Dashboard/>
        };
    }

    getThemen(param) {
        console.log(param);
        if (param === "Nestwerken") {
            this.setState({
                text: <Netzwerk/>
            });
        } else if (param === "Veranstaltungen") {
            this.setState({
                text: <Veranstaltungen/>
            })
        } else if (param === "Leihbörse") {
            this.setState({
                text: <Leihboerse/>
            })
        } else if (param === "Spielplatz-Talk") {
            this.setState({
                text: <SpielplatzTalk/>
            })
        } else if (param === "Dashboard") {
            this.setState({
                text: <Dashboard/>
            })
        }
    }

    render() {
        return (
            <div>
                <div>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Navbar.Brand href="#dashboard" onClick={this.getThemen.bind(this, "Dashboard")}>
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
                                <Nav.Link href="#talk"
                                          onClick={this.getThemen.bind(this, "Spielplatz-Talk")}>Spielplatz-Talk</Nav.Link>
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