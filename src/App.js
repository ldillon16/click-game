import React, { Component } from 'react';
// simport logo from './logo.svg';

import ClickCard from "./components/ClickCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title"

import images from "./images.json";
import './App.css';

let correctGuesses = 0;
let topScore = 0;
let clickMessage = "click on the goats but never the same one twice!"

class App extends Component {

  state = {
    images,
    correctGuesses,
    topScore,
    clickMessage
  };


cardClicked = id => {
    // // Filter this.state.images for images with an id not equal to the id being removed
    // const images = this.state.images.filter(image => image.id !== id);
    // // Set this.state.images equal to the new images array
    // this.setState({ images });
    // copy the state images array so the data is mutable
    const images = this.state.images;

    const clickedImage = images.filter(image => image.id === id);

    if (clickedImage[0].clicked === true) {
      console.log("Correct Guesses: " + correctGuesses);
      console.log("Top Score: " + topScore);

      correctGuesses = 0;
      clickMessage = "you already clicked that one :(";

      for (let i=0; i<images.length; i++) {
        images[i].clicked = false;
      }

      this.setState({clickMessage});
      this.setState({correctGuesses});
      this.setState({images});

    // else if for if image wasn't previously clicked and all images have not been clicked yet
    } else if (correctGuesses < 10) {


      clickedImage[0].clicked = true;

      correctGuesses++;

      clickMessage = "keep on clicking the goats!"

      if (correctGuesses > topScore) {
        topScore = correctGuesses;
        this.setState({topScore});
      }

      images.sort(function(a, b){return 0.5 - Math.random()});

      this.setState({images});
      this.setState({correctGuesses});
      this.setState({clickMessage});

    } else {
      clickedImage[0].clicked =true;

      clickMessage = "You got lucky! Try it again"

      topScore = 10;
      this.setState({topScore});

      for (let i=0; i<images.length; i++) {
        images[i].clicked = false;
      }

      images.sort(function(a, b){return 0.5 - Math.random()});

      this.setState({correctGuesses});
      this.setState({clickMessage});
      this.setState({images});

    }

  }



  render() {
    return (
      <Wrapper>
        <Title>Goats</Title>

        <h2 className="stats">
          {this.state.clickMessage}
        </h2>

        <h3 className="stats">
          Correct Guesses: {this.state.correctGuesses}
        </h3>

        <h3 className="stats">
          Top Score: {this.state.topScore}
        </h3>

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
