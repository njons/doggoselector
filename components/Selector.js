import React from "react";
import { render } from "react-dom";
import Options from "./Options.js";
import styled from "styled-components";

const SelectContainer = styled.div`
  display: flex;
`;

const SelectList = styled.select`
  background: white;
  border: none;
  outline: none;
  margin: 20px 0;
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  font-weight: 400;
  flex: 1;
  color: black;
  text-transform: capitalize;
`;

class Selector extends React.Component {
  render() {
    console.log(this.props.data);
    const results = this.props.data;

    let breeds = results.map((breed, i) => <Options breed={breed} key={i} />);

    return (
      <SelectContainer className="select-container">
        <SelectList
          className="selector"
          onChange={ev => this.props.getImg(ev.target.value)}
        >
          {breeds}
        </SelectList>
      </SelectContainer>
    );
  }
}

export default Selector;
