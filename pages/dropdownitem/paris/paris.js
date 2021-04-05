import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const defaultCenter = { lat: 48.8566, lng: 2.3522 };

const defaultOptions = { scrollwheel: false };

const RegularMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={ defaultCenter }
      defaultOptions={ defaultOptions }
    >
      <Marker position={ defaultCenter } />
    </GoogleMap>
  ))
);

const loadingElementStyle = { height: '100%' };
const containerElementStyle = { height: '775px' };
const mapElementStyle = { height: '100%' };

export default function Paris(){
  return (
    <RegularMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBEalP3my6XkJkdr3k89CeYmfuOXO3rq8c"
      loadingElement={<div style={ loadingElementStyle } />}
      containerElement={<div style={ containerElementStyle } />}
      mapElement={<div style={ mapElementStyle } />}
    />
  );
}
