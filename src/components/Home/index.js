import React from "react";
import MainView from "./MainView";
import Banner from "./Banner";
import { connect } from "react-redux";

const Home = props => (
  <div class="home-page">
    <Banner appName={props.appName} />
    <div class="container page">
      <div class="row">
        <MainView />
        <div class="col-md-3">
          <p>Popular Tags</p>
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  appName: state.appName
});

export default connect(mapStateToProps)(Home);
