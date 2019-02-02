import React from "react";
import { render } from "react-dom";

class Options extends React.Component {
  render() {
    console.log("this is breed state: ", this.props.data);
    return <option className="option" />;
  }
}

export default Options;
