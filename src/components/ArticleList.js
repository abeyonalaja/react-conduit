import React from "react";

const ArticleList = props => {
  if (props.articles) {
    return <div class="articles-preview">Loading...</div>;
  }

  if (props.articles.length === 0) {
    return <div class="article-preview">No articles are here... yet.</div>;
  }

  return (
    <div>
      {props.articles.map(article => {
        return <h2>{article.title}</h2>;
      })}
    </div>
  );
};

export default ArticleList;
