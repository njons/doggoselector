import React from "react";
import { render } from "react-dom";

class Options extends React.Component {
  render() {
    return <option className="option">{this.props.breed}</option>;
  }
}

export default Options;
