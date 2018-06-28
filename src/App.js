import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import * as Api from "./services/Api";
import searchIcon from "./assets/icons/search-icon.png";
import RoomView from "./components/RoomView/RoomView";
import InfiniteScroll from "react-infinite-scroller";
import { ScaleLoader } from 'react-spinners';
const startIndex = 0;
const itemsPerPage = 12;

class App extends Component {
  state = {
    roomList: []
  };

  componentDidMount() {
    Api.authenticate();
  }

  loadMore(page) {
    console.log(page);
    const startIndex = this.state.roomList.length
      ? this.state.roomList.length + 1
      : 0;
    Api.getRoomsList(startIndex, itemsPerPage).then(response => {
      console.log(this.state.roomList);
      const newArray = [...this.state.roomList, ...response];
      if (response) {
        this.setState({ roomList: newArray });
      }
    });
  }

  joinNow() {
    alert("Join now");
  }

  guestSignIn() {
    alert("Guest SignIn");
  }

  render() {
    let roomViewElementsList = [];
    this.state.roomList.map(item => {
      roomViewElementsList.push(<RoomView key={item.id} room={item} />);
    });

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

        <div className="filter-container">
          <div className="description-lite">
            Over 8,000 booing reviews in Dubai, with an average rating of 8.
          </div>
          <div className="search-result-count">89 places found</div>
          <div className="filter-btn-container">
            <div className="filter-btn">Great Deals</div>
            <div className="filter-btn">Near to Metro</div>
            <div className="filter-btn">5+ Rating</div>
          </div>
        </div>
        <div style={{ marginBottom: 20 }}>
          <InfiniteScroll
            className="rooms-list-container"
            pageStart={0}
            loadMore={this.loadMore.bind(this)}
            hasMore={true || false}
            // threshold={250}
            useWindow={true}
            loader={
              <ScaleLoader
                color={'#123abc'} 
                loading={true} 
              />
            }
          >
            {roomViewElementsList}
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

export default App;
