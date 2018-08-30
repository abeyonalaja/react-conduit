import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./components/header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header appName={this.props.appName} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  appName: state.appName
});
export default connect(mapStateToProps)(App);
