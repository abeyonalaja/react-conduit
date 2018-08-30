import React from "react";

const Header = props => (
  <nav className="navbar navbar-light">
    <div className="container">
      <a className="navbar-brand">{props.appName.toLowerCase()}</a>
    </div>
  </nav>
);

export default Header;
