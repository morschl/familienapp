import {Button} from 'react-bootstrap'
import { Component } from 'react';

export default class Dashboard extends Component {
    render() {
        return (
           <>
             <Button variant="primary">Ernährung</Button>{' '}
             <Button variant="secondary">Gesundheit</Button>{' '}
             <Button variant="success">Spielpartner</Button>{' '}
             <Button variant="warning">Betreuung</Button>{' '}
           </>
        )
    }
}