import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            {this.props.appName.toLowerCase()}
          </Link>

          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-link">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="login" className="nav-link">
                Sign in
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  appName: state.appName.appName
});
export default connect(mapStateToProps)(Header);
