import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Component } from 'react';

export class MapContainer extends Component {
    render() {
        return (
            <Map google={this.props.google} zoom={14}>

                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

                <InfoWindow onClose={this.onInfoWindowClose}>
                    
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyCZQdWZsNyakL30EbvVherj04c9HcqFc8")
})(MapContainer)