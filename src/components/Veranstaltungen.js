import { ButtonToolbar, Button } from 'react-bootstrap'
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
                <div className="container-fluid">
                    <div>
                        <div>
                            <ButtonToolbar>
                                <Button variant="success" onClick={this.getEvents.bind(this, "Kurse")}>Kurse</Button>
                                <Button variant="success" onClick={this.getEvents.bind(this, "Veranstaltungen")}>Veranstaltungen</Button>
                            </ButtonToolbar>
                            <div >
                                {this.state.text}
                            </div>
                        </div>
                    </div>
                </div>
            )
    }

    getEvents(param) {
        this.setState({
            text: this.getEventData(param)
        });
    }

    getEventData(param) {
        if (param === "Veranstaltungen") {
            return (
                <div>
                    <h2>Kommende Veranstaltungen</h2>
                    <table class="table">
                        <thead>
                            <tr>
                              <th scope="col">Datum</th>
                              <th scope="col">Uhrzeit</th>
                              <th scope="col">Ort</th>
                              <th scope="col">Name</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>26.09.2021</td>
                              <td>16:00</td>
                              <td>Münster</td>
                              <td>Eine Veranstaltung</td>
                            </tr>
                            <tr>
                              <td>26.09.2021</td>
                              <td>16:00</td>
                              <td>Münster</td>
                              <td>Eine Veranstaltung</td>
                            </tr>
                            <tr>
                              <td>28.09.2021</td>
                              <td>14:00</td>
                              <td>Auch Münster</td>
                              <td>Eine weitere Veranstaltung</td>
                            </tr>
                            <tr>
                              <td>30.09.2021</td>
                              <td>20:00</td>
                              <td>Auch Münster</td>
                              <td>Die beste Veranstaltung</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        } else if (param === "Kurse") {
            return (
                <div>
                    <h2>Regelmäßige Kurse</h2>
                    <table class="table">
                        <thead>
                            <tr>
                              <th scope="col">Tag</th>
                              <th scope="col">Uhrzeit</th>
                              <th scope="col">Ort</th>
                              <th scope="col">Name</th>
                              <th scope="col">Intervall</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Montags</td>
                              <td>16:00</td>
                              <td>Münster</td>
                              <td>Krabbelgruppe</td>
                              <td>wöchentlich</td>
                            </tr>
                            <tr>
                              <td>Dienstags</td>
                              <td>14:00</td>
                              <td>Geheim</td>
                              <td>Babyschwimmen</td>
                              <td>2-wöchentlich</td>
                            </tr>
                            <tr>
                              <td>Donnerstags</td>
                              <td>17:00</td>
                              <td>Spielplatz</td>
                              <td>Gemeinsames Spielen</td>
                              <td>Monatlich</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        }
    }
}