import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { authenticate } from "./services/Api";
import Select from "react-select";
import "react-select/dist/react-select.css";
import searchIcon from "./assets/icons/search-icon.png";

class App extends Component {
  state = {
    selectedOption: ""
  };

  componentDidMount() {
    authenticate();
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption: "" });
    // selectedOption can be null when the `x` (close) button is clicked
    if (selectedOption) {
      console.log(`Selected: ${selectedOption.label}`);
    }
  };

  joinNow() {
    alert("Join now");
  }

  guestSignIn() {
    alert("Guest SignIn");
  }

  render() {
    return (
      <div className="App">
        <div className="app-header">
          <div className="header-contact">
            Contact us directly at +971 (55) 895 8452 (Local time 22:19)
          </div>
          <div className="header-buttons-container">
            <div onClick={this.joinNow}>Join Now</div>
            <div onClick={this.guestSignIn}>Guest Sign In</div>
            <div>ENG</div>
            <div>USD</div>
          </div>
        </div>

        <div className="menu-container">
          <div className="logo-name">booknstay</div>
          <div className="row-break" />
          <div>
            <img src={searchIcon} className="search-icon" alt="search" />
          </div>
          <span className="search-text">
            Downtown Dubai, United Arab Emirates
          </span>
          <div className="available-dates">
            <span className="month">April</span>
            <span className="date">29</span>
            <span className="date">20</span>
          </div>
          <div className="row-break" />
          <div className="btn-group1">
            <div className="btn">Accomodation</div>
            <div className="btn">Restaurants</div>
            <div className="btn">Rental Cars</div>
            <div className="btn">Flights</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
