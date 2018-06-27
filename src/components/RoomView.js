import React, { Component } from "react";
import "./styles.css";

export default class RoomView extends Component {
  render() {
    const room = this.props.room;
    return <div className="room-view">{room.name}</div>;
  }
}
