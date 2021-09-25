import React, { Component } from 'react';

import './SpielplatzTalk.css'

export default class SpielplatzTalk extends Component {


    render() {
        return (
            <div style = {{height:"90vh"}}>
            <iframe src="https://ufopixel.de/spielplatz/" width="100%" height="100%" name="SELFHTML_in_a_box">
                <p>Ihr Browser kann leider keine eingebetteten Frames anzeigen:
                    Sie können die eingebettete Seite über den folgenden Verweis aufrufen:
                    <a href="https://ufopixel.de/spielplatz/">SpielplatzTalk</a>
                </p>
            </iframe>
            </div>
        )
    }
}