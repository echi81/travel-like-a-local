import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Paper from 'material-ui/Paper';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOn: false,
      open: false,
    }
    this.showTrips = this.showTrips.bind(this);
    this.hideTrips = this.hideTrips.bind(this);
    this.getTrip = this.getTrip.bind(this);
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };


  showTrips() {
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  }

  getTrip(id) {
    this.props.getTrip(id)
  }

  render() {
    return (
      <nav className="navbar">
          <div className="logo">
            <h3 className="tlal">Travel Like a Local</h3>
          </div>
          <div className="header-links">
          <Link to="/explore">Search</Link>
          <a onMouseEnter={this.showTrips} >Trips</a>
           {/* <Dropdown trips={this.props.trips} /> */}
          {/* {this.props.trips && } */}
           <Popover
              open={this.state.open}
              anchorEl={this.state.anchorEl}
              anchorOrigin={{horizontal: 'left', vertical: 'top'}}
              targetOrigin={{horizontal: 'middle', vertical: 'bottom'}}
              onRequestClose={this.handleRequestClose}
              >
            <Menu>
            {
              this.props.trips.length > 0 &&
              this.props.trips.map((el, ind) => {

                return <Link to="/trips"><MenuItem primaryText={el.name} onClick={this.getTrip} /></Link>

              })
            }
            </Menu>
          </Popover>
          <Link to="/suggestions">Suggestions</Link>
          <Link to="/friends">Friends</Link> 
          {/* <div className="login-signup"> */}
            {/* {props.userName !== 'not logged in' && <span>Hello {props.userName}!     </span>} */}
            
            {this.props.userName !== 'not logged in' && <a className="logout-button" href="logout" onClick={()=>localStorage.clear()}>Logout</a>}
            {this.props.userName === 'not logged in' && <a href="signup">SignUp</a>}
            {this.props.userName === 'not logged in' && <a href="login">Login</a>}
        </div>
      </nav>
    );
  }
};

export default Nav;
