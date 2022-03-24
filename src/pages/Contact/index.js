import React, {Component} from "react";
import Header from "../../Components/Header";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import { GoogleMapReact } from 'google-map-react'
import './styles.css'
import { TextField } from '@mui/material'
import Footer from "../../Components/Footer";

export class Contact extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Header/>
                <div className="container-row">

                    <form className="contato">
                        <h1>Entre em contato!</h1>

                        <TextField className="field" label="Email" variant="outlined" />
                        <TextField className="field" label="Nome" variant="outlined" />
                        <TextField className="field msg" label="Mensagem" multiline
                         maxRows={4} variant="outlined" />

                        <button className='btn'>
                            Enviar mensagem
                            <i className='fa fa-send'></i>
                        </button>

                    </form>
                </div>

                <Footer />
            </div>
        );
    }  
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyAUOVxWw9cTQW5kRll2SEbdveERJGqWUAM')
  })(Contact)