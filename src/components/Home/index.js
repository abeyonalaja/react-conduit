import React, { Component } from "react";
import MainView from "./MainView";
import agent from "../../agent";
import Banner from "./Banner";
import { connect } from "react-redux";

class Home extends Component {
  componentDidMount() {
    console.log("Did Mount");
    this.props.onLoad(agent.Articles.all());
    console.log("Did Mount After");
  }

  render() {
    return (
      <div className="home-page">
        <Banner appName={this.props.appName} />
        <div className="container page">
          <div className="row">
            <MainView />
            <div className="col-md-3">
              <p>Popular Tags</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  appName: state.appName
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({ type: "HOME_PAGE_LOADED", payload })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
