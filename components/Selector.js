import React from "react";
import { render } from "react-dom";
import Options from "./Options.js";

class Selector extends React.Component {
  render() {
    console.log(this.props.data);
    const results = this.props.data;

    let breeds = results.map((breed, i) => <Options breed={breed} key={i} />);

    return (
      <div>
        <select
          className="selector"
          onChange={ev => this.props.getImg(ev.target.value)}
        >
          {breeds}
        </select>
      </div>
    );
  }
}

export default Selector;
