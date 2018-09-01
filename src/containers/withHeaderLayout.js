import React from "react";
import Header from "../components/header";

export const withHeaderLayout = Wrapped => props => (
  <div className="warpper">
    <Header />
    <Wrapped {...props} />
  </div>
);

export default withHeaderLayout;
