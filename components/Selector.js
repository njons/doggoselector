import React from "react";
import { render } from "react-dom";
import Options from "./Options.js";

class Selector extends React.Component {
  /* store the data from the App componetnt in a variable */
  // const results = props.data;

  render() {
    console.log(this.props.data);
    return (
      <select className="selector">
        {this.props.data}
        <Options data={this.props.data} />
      </select>
    );
  }
}

export default Selector;
