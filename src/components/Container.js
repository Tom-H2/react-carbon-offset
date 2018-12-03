import React, { Component } from 'react';
import {
  Map,
  InfoWindow,
  Marker,
  GoogleApiWrapper
} from 'google-maps-react';


const apiKey = 'AIzaSyA1bfMb-5j1rwtOb-fZQzrtFfa1MjA0MUc';

export class Container extends Component {

  fetchPlaces(mapProps, map) {
    const {google} = mapProps;
    const service = new google.maps.places.PlacesService(map);
  }

  onMarkerClick(props, marker, e) {
    console.log("marker click");
  }

  render() {
    const style = {
      width: '100vw',
      height: '100vh'
    }
    return (
      <div style={style}>
      <Map google={this.props.google}
        initialCenter={{
          lat: 48.1215,
          lng: -123.434
        }}
        onReady={this.fetchPlaces}
        //visible={false}
        zoom={14}
        onClick={this.onMapClicked}
      >
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>Carbon Cost</h1>
            </div>
        </InfoWindow>
      </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey
})(Container)
