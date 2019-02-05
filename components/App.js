import React from "react";
import { render } from "react-dom";
import styled from "styled-components";
import Header from "./Header.js";
import Selector from "./Selector.js";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Image = styled.img`
  height: 80vh;
  width: auto;
  margin: auto;
  padding: 2% 0;
`;

class App extends React.Component {
  state = {
    breeds: [],
    imageUrl: "",
    image: []
  };

  componentDidMount() {
    Promise.all([
      // fetch the list of dog breeds and a random image of an affenpinscher (this will always be the first selected)
      fetch("https://dog.ceo/api/breeds/list"),
      fetch("https://dog.ceo/api/breed/affenpinscher/images/random")
    ])
      .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
      .then(data =>
        this.setState({
          breeds: data[0].message,
          image: data[1].message
        })
      )
      .catch(error => {
        console.log(`Looks like there was an issue:`, error);
      });
  }

  imageReq = breed => {
    // return the clicked breed and insert it into the image url
    this.setState(
      {
        imageUrl: `https://dog.ceo/api/breed/${breed}/images/random`
      },
      () => {
        // fetch an image using the contructed url and change whats in image
        fetch(this.state.imageUrl)
          .then(res => res.json())
          .then(data => {
            this.setState({ image: data.message });
          })
          .catch(error => {
            console.log(`Looks like there was an issue:`, error);
          });
      }
    );
  };

  render() {
    return (
      <Container className="container">
        <Header />
        {/* the breeds data needs to be passed down to the Selector and Options compontents */}
        <Selector data={this.state.breeds} getImg={this.imageReq} />
        <Image src={this.state.image} />
      </Container>
    );
  }
}

export default App;
