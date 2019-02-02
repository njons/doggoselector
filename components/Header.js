import React from "react";
import { render } from "react-dom";
import styled from "styled-components";

class Header extends React.Component {
  state = {};

  render() {
    return (
      <div className="header">
        <h1 className="title">Select a doggo below</h1>
        {/* put JSX that you want to render in here*/}
      </div>
    );
  }
}

export default Header;
