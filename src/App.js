import React, { Component } from 'react';
import logo from './logo.svg';

import ClickCard from "./components/ClickCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title"

import images from "./images.json";
import './App.css';


class App extends Component {

  state = {
    images
  };


cardClicked = id => {
    // Filter this.state.images for images with an id not equal to the id being removed
    const images = this.state.images.filter(image => image.id !== id);
    // Set this.state.images equal to the new images array
    this.setState({ images });


};


  render() {
    return (
      <Wrapper>
        <Title>Images</Title>
        {this.state.images.map(images => (
          <ClickCard
            cardClicked={this.cardClicked}
            id={images.id}
            key={images.id}
            image={images.photo}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
