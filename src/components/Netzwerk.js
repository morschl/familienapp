import {Button} from 'react-bootstrap'
import { Component } from 'react';

export default class Netzwerk extends Component {
    render() {
        return (
            <>
              <Button variant="primary" size="lg" disabled>
                Ernährung
              </Button>{' '}
              <Button variant="secondary" size="lg" disabled>
                Gesundheit
              </Button>{' '}
              <Button href="#" variant="secondary" size="lg" disabled>
                Spielpartner
              </Button>
              <Button href="#" variant="secondary" size="lg" disabled>
                 Betreuung
              </Button>
            </>
        )
    }
}