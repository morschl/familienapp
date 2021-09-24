import {ButtonToolbar, Button} from 'react-bootstrap'
import { Component } from 'react';

export default class Netzwerk extends Component {

    constructor(props){
             super(props);
             this.state = {
                 fragen: [
                 {
                        frage0: {
                            ersteller: "Justin",
                            frage: "oki-doki",
                        },
                  },
                  {
                    frage0: {
                             ersteller: "Justin",
                             frage: "oki-doki",
                        },
                  }
                 ],
             }
        }


    getErnaehrungFragen(){
        console.log(this.state.fragen);
        //console.log(this.state.fragen[1].frage0);
      }

    render() {
        return (
        <div class="container h-100">
            <div class="row align-items-center h-100">
                <div class="col-6 mx-auto themen">
                    <ButtonToolbar>
                        <Button variant="success" onClick={this.getErnaehrungFragen.bind(this)}>Ernährung</Button>
                        <Button variant="success">Gesundheit</Button>
                        <Button variant="success">Spielpartner</Button>
                        <Button variant="success">Betreuung</Button>
                    </ButtonToolbar>
               </div>
            </div>
        </div>
        )
    }
}