import React from "react";
import { connect } from "react-redux";
import ArticleList from "../ArticleList";

const MainView = props => (
  <div class="col-md-9">
    <div class="feed-toggle">
      <ul class="nav nav-pills outline-active">
        <li className="nav-item">
          <a href="" className="nav-link activ">
            Global Feed
          </a>
        </li>
      </ul>
    </div>
    <ArticleList articles={props.articles} />
  </div>
);

const mapStateToProps = state => ({
  articles: state.articles
});

export default connect(mapStateToProps)(MainView);
