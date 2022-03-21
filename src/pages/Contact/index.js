import React, {Component} from "react";
import Header from "../../Components/Header";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import './styles.css'
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { TextField } from '@mui/material'

export class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            marcador: {
                lat: -23.5461068, 
                lng: -46.4999808
            }
        }
    }

    render(){
        return(
            <div>
                <Header/>
                <div className="container-row">
                    
                    <div style={{
                            position: "relative",
                            width: "40%",
                            height: "70vh"}} 
                        className="map">

                        <Map google={this.props.google} 
                            zoom={13}
                            initialCenter={{ lat: 40.7812, lng: -73.9665}}
                            disableDefaultUI= {true}>

                            <Marker position={this.state.marcador} />

                        </Map>
                    </div>

                    <form>
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
            </div>
        );
    }  
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyAUOVxWw9cTQW5kRll2SEbdveERJGqWUAM')
  })(Contact)