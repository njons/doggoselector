import React from "react";
import { render } from "react-dom";
import styled from "styled-components";

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Title = styled.h1`
  text-transform: uppercase;
`;

class Header extends React.Component {
  state = {};

  render() {
    return (
      <TitleContainer className="header">
        <Title className="title">Select a doggo breed</Title>
        {/* put JSX that you want to render in here*/}
      </TitleContainer>
    );
  }
}

export default Header;
