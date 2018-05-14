// Code CoordinatesButton Component Here
import React from "react";

export default class CoordinatesButton extends React.Component {
  onReceiveCoordinates = e => [e.screenX, e.screenY];

  render() {
    return (
      <button onClick={this.onReceiveCoordinates}>Receive Coordinates</button>
    );
  }
}
