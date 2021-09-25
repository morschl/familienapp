import {ButtonToolbar, Button, Tabs, Tab} from 'react-bootstrap'
import {Component} from 'react';

import './Netzwerks.css'

import FragenUndAntworten from './FragenUndAntworten';

export default class Netzwerk extends Component {

    constructor(props) {
        super(props);
        this.state = {
            oldState: "alle",
            text: <FragenUndAntworten cat={null}/>
        };
    }


    getFragenUndAntworten(param) {
        if (param !== this.state.oldState) {
            this.setState({
                oldState: param,
                text: <FragenUndAntworten cat={param}/>
            });
        } else {
            this.setState({
                oldState: "alle",
                text: <FragenUndAntworten cat={null}/>
            });
        }

    }

    render() {
        return (
            <Tabs className='tabs'
                  defaultActiveKey="main" transition={false}
                  variant='pills'>
                <Tab eventKey="main" title="Main">
                    <div className="container-fluid">
                        <div>
                            <div>
                                <ButtonToolbar>
                                    <Button variant="success"
                                            onClick={this.getFragenUndAntworten.bind(this, "Ernährung")}>Ernährung</Button>
                                    <Button variant="success"
                                            onClick={this.getFragenUndAntworten.bind(this, "Gesundheit")}>Gesundheit</Button>
                                    <Button variant="success"
                                            onClick={this.getFragenUndAntworten.bind(this, "Spielpartner")}>Spielpartner</Button>
                                    <Button variant="success"
                                            onClick={this.getFragenUndAntworten.bind(this, "Betreuung")}>Betreuung</Button>
                                </ButtonToolbar>
                                <div>
                                    {this.state.text}
                                </div>
                            </div>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="groups" title="Gruppen">
                    Gruppen
                </Tab>
                <Tab eventKey="chat" title="Chat">
                    Chat
                </Tab>
            </Tabs>


        )
    }
}