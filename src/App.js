import React, { Component } from 'react';
import StickyHeader from 'react-sticky-header';

// import { StickyContainer, Sticky } from 'react-sticky';
// simport logo from './logo.svg';

import ClickCard from "./components/ClickCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title"
import Header from "./components/Header"

import images from "./images.json";
import './App.css';

let score = 0;
let topScore = 0;
let clickMessage = "Click a goat to begin!"

class App extends Component {

  state = {
    images,
    score,
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
      console.log("Score: " + score);
      console.log("Top Score: " + topScore);

      alert("Sorry, you lose!")


      score = 0;
      clickMessage = "You already clicked that goat :(";

      for (let i=0; i<images.length; i++) {
        images[i].clicked = false;
      }

      this.setState({clickMessage});
      this.setState({score});
      this.setState({images});

    // else if for if image wasn't previously clicked and all images have not been clicked yet
    } else if (score < 12) {


      clickedImage[0].clicked = true;

      score++;

      clickMessage = "Keep on clicking the goats!"

      if (score > topScore) {
        topScore = score;
        this.setState({topScore});
      }

      images.sort(function(a, b){return 0.5 - Math.random()});

      this.setState({images});
      this.setState({score});
      this.setState({clickMessage});

    } else {
      clickedImage[0].clicked =true;

      clickMessage = "You got lucky! Try it again!"

      topScore = 12;
      this.setState({topScore});

      for (let i=0; i<images.length; i++) {
        images[i].clicked = false;
      }

      images.sort(function(a, b){return 0.5 - Math.random()});

      this.setState({score});
      this.setState({clickMessage});
      this.setState({images});

    }

  }



  render() {
    return (
    //   <Shake id="linear-yaxis-container" ref="linearyaxis" {...linearaxisProfile}>
    // <div id="shake-cardtarget-linearyaxis-container" className="shake-cardtarget"></div>

      <Wrapper>

      const MyHeader = () => (
      <StickyHeader
        header={ 
        <Header>

          <h3>Clicky Goats</h3>


          <h3 className="stats">
            {this.state.clickMessage}
          </h3>

          <span className="float-right nowrap">

          <h3 className="stats">
            Score: {this.state.score} |  Top Score: {this.state.topScore}

          </h3>
          </span>

        </Header>
        }
      >

        <Title>
        <h1>CLICKY GOATS</h1>
        <h4>Click the goats to earn points, but never the same goat twice!</h4>

        </Title>


      </StickyHeader>

      <div className="cardContainer">

        {this.state.images.map(images => (
          <ClickCard
            cardClicked={this.cardClicked}
            id={images.id}
            key={images.id}
            image={images.photo}
          />
        ))}

      </div>
      </Wrapper>
      // </Shake>
    );
  }
}

export default App;
