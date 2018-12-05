//https://scotch.io/tutorials/react-apps-with-the-google-maps-api-and-google-maps-react
//https://developers.google.com/maps/documentation/javascript/directions
//https://github.com/fullstackreact/google-maps-react
//https://github.com/ecteodoro/google-distance-matrix

import React, { Component } from 'react';
import {
  Map,
  InfoWindow,
  Marker,
  GoogleApiWrapper
} from 'google-maps-react';


const apiKey = 'AIzaSyA1bfMb-5j1rwtOb-fZQzrtFfa1MjA0MUc';

export class Container extends Component {

  state = {
   showingInfoWindow: false,  //Hides or the shows the infoWindow
   activeMarker: {},          //Shows the active marker upon click
   selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
  };


  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      ativeMarker: marker,
      showingInfoWindow: true
  });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
          showingInfoWindow: false,
          activeMarker: null
      });
    }
  };

  render() {
    const style = {
      width: '100vw',
      height: '100vh'
    }
    return (
      <main style={style}>
      <Map google={this.props.google}
        initialCenter={{
          lat: 48.1215,
          lng: -123.434
        }}
        //visible={false}
        zoom={14}

      >
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}>
          <div>
              <h3>{this.state.selectedPlace.name}</h3>
          </div>
        </InfoWindow>
      </Map>
      </main>
    );
  }
}

export default GoogleApiWrapper({
  apiKey
})(Container)
