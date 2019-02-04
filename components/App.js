import React from "react";
import { render } from "react-dom";
import styled from "styled-components";
import Header from "./Header.js";
import Selector from "./Selector.js";

/*
  1. Make xhr requests in the top level componetent to let it be aware of the entire app as it renders its children, it's not good practie to couple the data too closely to the view and it increases the re-usability of the data
  2. Pass the data a down to the relevant child
*/

class App extends React.Component {
  state = {
    breeds: [],
    imageUrl: "404",
    image: []
  };

  componentDidMount() {
    // /* At this point in the component lifecycle this component has a DOM representation, so this is a good point to make an API call*/
    fetch("https://dog.ceo/api/breeds/list")
      .then(res => res.json())
      .then(data => {
        // console.log("this is the data from the API: ", data.message);
        /* set the new state of the empty breeds array */
        this.setState({ breeds: data.message });
      })
      .catch(error => {
        console.log(`Looks like there was an issue:`, error);
      });
  }

  generateUrl = breed => {
    console.log("workin");
    console.log(breed);
    this.setState(
      {
        imageUrl: `https://dog.ceo/api/breed/${breed}/images/random`
      },
      () => {
        this.imageReq();
      }
    );
  };

  imageReq = () => {
    // console.log("in generateURL", this.state.imageUrl);
    console.log("fetchin data");
    console.log(this.state.imageUrl);
    fetch(this.state.imageUrl)
      .then(res => res.json())
      .then(data => {
        console.log("this is the data from the API: ", data.message);
        /* set the new state of the empty breeds array */
        this.setState({ image: data.message });
      })
      .catch(error => {
        console.log(`Looks like there was an issue:`, error);
      });
  };

  render() {
    /* put JSX that you want to render in here */
    return (
      /* React.Fragment lets you to list components without having to create all the surrounding html/JSX tags */
      <React.Fragment>
        <div className="container">
          <Header />
          {/* the breeds data needs to be passed down to the Selector and Options compontents */}
          <Selector data={this.state.breeds} constructUrl={this.generateUrl} />
          <img src={this.state.image} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
