import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './Maps.css';
//scripts that allow add ons from Google Maps

    class Map extends Component {

      componentDidUpdate(prevProps, prevState) {
        if (prevProps.google !== this.props.google) {
          this.loadMap();
        }
      }
      /*Map.propTypes = {
        google: React.PropTypes.object,
        zoom: React.PropTypes.number,
        initialCenter: React.PropTypes.object
      };*/

  loadMap() {
    if (this.props && this.props.google) {
      // google is available
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      let zoom = "";
      let lat = "";
      let lng = "";
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      this.map = new maps.Map(node, mapConfig);
  }
}

      render() {
        return (
          <div ref="map">
            Loading map...
          </div>
        );
      };
}


    export default Map;
