import { Accordion } from 'react-bootstrap'
import { Component } from 'react';
import './FragenUndAntworten.css';

export default class FragenUndAntworten extends Component {

    render() {
        if (this.props.cat === "Ernährung") {
            return (
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Ich habe eine sechsmonatealte Tochter. Welche Teesorte  koennt Ihr bei Blaehungen empfehlen?</Accordion.Header>
                        <Accordion.Body>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Mein Sohn schlaeft einfach nicht. Was hat euch geholfen?</Accordion.Header>
                        <Accordion.Body>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            )
        } else if (this.props.cat === "Gesundheit") {
            return (
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Ich habe eine sechsmonatealte Tochter. Welche Teesorte  koennt Ihr bei Blaehungen empfehlen?</Accordion.Header>
                        <Accordion.Body>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Mein Sohn schlaeft einfach nicht. Was hat euch geholfen?</Accordion.Header>
                        <Accordion.Body>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            )
        } else if (this.props.cat === "Spielpartner") {
            return (
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Jemand Lust auf Suedviertelspielplatz heut Nachmittag?</Accordion.Header>
                        <Accordion.Body>
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24" /></g><g><path d="M20,2H4.01c-1.1,0-2,0.9-2,2L2,19.58c0,0.89,1.08,1.34,1.71,0.71L6,18h14c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M12,6 c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2S10.9,6,12,6z M16,14H8v-0.57c0-0.81,0.48-1.53,1.22-1.85C10.07,11.21,11.01,11,12,11 c0.99,0,1.93,0.21,2.78,0.58C15.52,11.9,16,12.62,16,13.43V14z" /></g></svg>
                            &nbsp;Suse und Ella hier. Wir sind ab 16:00 Uhr da.
                            <hr />
                        </Accordion.Body>
                        <Accordion.Body>
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24" /></g><g><path d="M20,2H4.01c-1.1,0-2,0.9-2,2L2,19.58c0,0.89,1.08,1.34,1.71,0.71L6,18h14c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M12,6 c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2S10.9,6,12,6z M16,14H8v-0.57c0-0.81,0.48-1.53,1.22-1.85C10.07,11.21,11.01,11,12,11 c0.99,0,1.93,0.21,2.78,0.58C15.52,11.9,16,12.62,16,13.43V14z" /></g></svg>
                            &nbsp;Tim und Jannis kommen auch gerne :) Bis spaeter.
                            <hr />
                        </Accordion.Body>
                        <Accordion.Body>
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24" /></g><g><path d="M20,2H4.01c-1.1,0-2,0.9-2,2L2,19.58c0,0.89,1.08,1.34,1.71,0.71L6,18h14c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M12,6 c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2S10.9,6,12,6z M16,14H8v-0.57c0-0.81,0.48-1.53,1.22-1.85C10.07,11.21,11.01,11,12,11 c0.99,0,1.93,0.21,2.78,0.58C15.52,11.9,16,12.62,16,13.43V14z" /></g></svg>
                            &nbsp;Julia und Hannah kommen auch. So gegen 16:30 Uhr.
                            <hr />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Alleinerziehender Vater hier. Suche Gleichgesinnte.</Accordion.Header>
                        <Accordion.Body>
                            Hier kommt der Pedobaer.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            )
        } else if (this.props.cat === "Betreuung") {
            return (
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Hat jemand Erfahrungen mit der Kita Spatzenhaus?</Accordion.Header>
                        <Accordion.Body>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Welches Schwimmbad koennt ihr fuer Kleinkinder empfehlen?</Accordion.Header>
                        <Accordion.Body>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            )
        }
    }
}