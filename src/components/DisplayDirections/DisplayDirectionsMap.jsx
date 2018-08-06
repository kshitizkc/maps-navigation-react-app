import React, { Component } from 'react';
import { compose, withProps, lifecycle } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer
} from "react-google-maps";

const google = window.google = window.google ? window.google : {}

class MyMapComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const DirectionsComponent = compose(
        withProps({
          googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDFGmYrvEbJ4rWLqG_JXjZtnDRZWiO38PU&v=3.exp&libraries=geometry,drawing,places",
          loadingElement: <div style={{ height: `100%` }} />,
          containerElement: <div style={{ height: `400px` }} />,
          mapElement: <div style={{ height: `100%` }} />,
        }),
        withScriptjs,
        withGoogleMap,
        lifecycle({
          componentDidMount() {
            const DirectionsService = new google.maps.DirectionsService();

            const { 
              from = {}
            } = this.props.address

            const { 
              to = {}
            } = this.props.address

            DirectionsService.route({
              origin: from.provided_formatted_address || new google.maps.LatLng(41.8507300, -87.6512600),
              destination: to.provided_formatted_address || new google.maps.LatLng(41.8525800, -87.6514100),
              travelMode: google.maps.TravelMode.DRIVING,
            }, (result, status) => {
              if (status === google.maps.DirectionsStatus.OK) {
                this.setState({
                  directions: result,
                });
              } else {
                console.error(`error fetching directions ${result}`);
              }
            });
          }
        })
      )(props =>
        <div>
          <GoogleMap
            defaultZoom={7}
            defaultCenter={new google.maps.LatLng(41.8507300, -87.6512600)}
            >
            {props.directions && <DirectionsRenderer directions={props.directions} />}
          </GoogleMap>
        </div>
      )
      return <DirectionsComponent address={this.props.address}/>
  }
}

export default MyMapComponent;
