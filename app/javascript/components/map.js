import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 51.5074,
      lng: -0.1278
    },
    zoom: 14
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: 'calc(100vh - 100px)', width: '100vw' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.MAPS_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={51.5074}
            lng={-0.1278}
            text={'My name is geoff'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
