import React, { Component } from "react";
import logo from "../../logo.svg";
import "./styles.css";
import * as Api from "../../services/Api";
import searchIcon from "../../assets/icons/search-icon.png";
import RoomView from "../../components/RoomView";
import InfiniteScroll from "react-infinite-scroller";
import { ScaleLoader, BeatLoader } from "react-spinners";
const itemsPerPage = 12;

class HomePage extends Component {
  state = {
    authenticating: false,
    isLoggedIn: null,
    authToken: null,
    currentPage: 1,
    roomList: []
  };

  async componentDidMount() {
    await this.setState({
      authenticating: true
    });
    Api.authenticate().then(response => {
      if (response.data && response.data.token) {
        this.setState({
          authenticating: false,
          isLoggedIn: true,
          authToken: response.data.token
        });
      }
    });
  }

  async loadMore(page) {
    Api.getRoomsList({ page, records: itemsPerPage, authToken: this.state.authToken }).then(
      response => {
        this.setState({
          roomList: [...this.state.roomList, ...response.data]
        });
      }
    );
  }

  joinNow() {
    alert("Join now");
  }

  guestSignIn() {
    alert("Guest SignIn");
  }

  renderRoomListAndAuthDetails() {
    if (this.state.authenticating === true) {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: 'column',
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <p>Please wait while auhenticating.....</p>
          <BeatLoader size={18} margin={"5px"} color={"#123abc"} loading={true} />
        </div>
      );
    } else if (this.state.authenticating === false && this.state.isLoggedIn === false) {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: 'column',
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <p>Authentication failed</p>
        </div>
      );
    } else if (this.state.authenticating === false && this.state.isLoggedIn === true) {
      const roomViewElementsList = [];
      this.state.roomList.map(item => {
        roomViewElementsList.push(<RoomView key={item.id} room={item} />);
      });
      return (
        <div className="rooms-list-container">
          <InfiniteScroll
            className="rooms-list-infiniteScroll"
            pageStart={0}
            loadMore={this.loadMore.bind(this)}
            hasMore={true || false}
            useWindow={true}
            loader={<ScaleLoader key={new Date().getTime()} color={"#123abc"} loading={true} />}
          >
            {roomViewElementsList}
          </InfiniteScroll>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="App">
        <div className="app-header-container">
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
          <span className="search-text">Downtown Dubai, United Arab Emirates</span>
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
        {this.renderRoomListAndAuthDetails()}
      </div>
    );
  }
}

export default HomePage;
