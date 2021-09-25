import React, { Component } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'

import './AppHeader.css'
import Netzwerk from "./Netzwerk";

export default class AppHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };
    }

    getThemen() {
        console.log('test');
        this.setState({
            text: <Netzwerk />
        });
    }

    render() {
        return (
            <div>
                <div>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Navbar.Brand href="#home">
                            <img className='logo' src="../logo.svg" alt='' />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#network"
                                    onClick={this.getThemen.bind(this)}>Nestwerken</Nav.Link>
                                <Nav.Link href="#events">Kurse & Veranstaltungen</Nav.Link>
                                <Nav.Link href="#shares">Leihbörse</Nav.Link>
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