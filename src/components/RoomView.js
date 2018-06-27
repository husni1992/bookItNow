import React, { Component } from "react";
import "./styles.css";

export default class RoomView extends Component {
  render() {
    const room = this.props.room;
    return (
      <div className="room-view">
        <img className="room-image" src={room.image} alt={room.name} />
        <div className="room-details">
          <div className="badge-container">
            <div className="badge">{room.rating}</div>
            <div className="badge-text">{room.badge}</div>
          </div>
          <div className="details-container">
            <div className="rm-name">{room.name}</div>
            <div className="rm-cost">Starting from $ {room.cost}</div>
          </div>
        </div>
      </div>
    );
  }
}
