import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./components/header";
import "./App.css";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header appName={this.props.appName} /> */}
        <Home />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  appName: state.appName
});
export default connect(mapStateToProps)(App);
