// Importing the React package and deconstructing the Component class
import React, { Component } from "react";

// Importing and deconstructing the Link function from the react-router-dom
import { Link } from "react-router-dom";

// Importing CSS
import './style.css'

// Declaring the Nav class component
class Nav extends Component {
  // Declaring the state for the Nav and child components
  state = {
    open: false,
    width: window.innerWidth
  };

  // A function is monitoring the state of the window.innerWidth
  // If statement causes the open state to false when the window.innerWidth is > 991
  updateWidth = () => {
    const newState = { width: window.innerWidth };

    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }

    this.setState(newState);
  };

  // A function for toggling the collapsible menu
  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };

  // using the componentDidMount() function to invoke the addEventListener() function upon mounting of the Nav component
  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  // using the componentWillUnmount() function to invoke the removeEventListener() function upon mounting of the Nav component
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  // Using ReactDOM.render to render the Nav component
  // This returns the Nav populated with other components and props
  // The Div contains the collapsible menu
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
        <Link className="navbar-brand" to="/">
          Google Books
        </Link>
        <button
          onClick={this.toggleNav}
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`${this.state.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                to="/"
              >
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                to="/saved"
              >
                Saved
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

// Exporting the Nav component
export default Nav;
