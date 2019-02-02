import React from "react";
import { render } from "react-dom";
import Options from "./Options.js";

class Selector extends React.Component {
  /* store the data from the App componetnt in a variable */
  render() {
    console.log(this.props.data);
    const results = this.props.data;

    let breeds = results.map((breed, i) => <Options breed={breed} key={i} />);

    return <select className="selector">{breeds}</select>;
  }
}

export default Selector;
