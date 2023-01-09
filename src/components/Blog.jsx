import React, { Component } from "react";

const SectionStyle = {
  height: "100vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
class Blog extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div style={{ ...SectionStyle, backgroundColor: "white" }}>
          <h1>
            This is the blog page, still a stub. Check back for updates soon!
          </h1>
        </div>
      </React.Fragment>
    );
  }
}

export default Blog;
