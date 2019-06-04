import React from "react";
import Container from "./components/Container"
import Image from "./components/Image";
import Score from "./components/Score";
import initialGameState from "./initialGameState.json";
import "./App.css"

// Materialize things 
// import Button from "./components/Button";
// import Modal from "./components/Modal";
// import M from "materialize-css";


//Bootstrap things
import EndModal from "./components/EndModal";
import InstructionModal from "./components/InstructionModal";

class App extends React.Component {
  state = {
    imageState: initialGameState, //game state containing images and whether if the image is clicked
    currentScore: 0,
    highScore: 0,
    endModalShow: false,   //modal display if true
    instructionModalShow: false

  }

  //Modal functions
  endModalHandleClose = () => {
    this.setState({ endModalShow: false });
    this.resetGame();
  }

  endModalHandleShow = () => {
    this.setState({ endModalShow: true });
  }

  instructionModalHandleClose = () => {
    this.setState({ instructionModalShow: false })
  }

  instructionModalHandleShow = () => {
    this.setState({ instructionModalShow: true })
  }
  //end modal funcitons

  //Game functions
  increaseScore = () => {
    //function to increase score and update highscore
    let currentScore = this.state.currentScore;
    currentScore += 1;
    this.setState({ currentScore: currentScore });
    // highscore update if current score is greater than the highscore
    currentScore > this.state.highScore && this.setState({ highScore: currentScore })
  }

  resetGame = () => {
    const resetedState = this.state.imageState.map(data => {
      data.clicked = false;
      return data
    })
    this.setState({
      currentScore: 0,
      imageState: resetedState
    })
  }

  imageClick = id => {
    // on click for the image, processes game logic for if clikcked is true or false
    // obtain the index of the image in the array
    const index = this.state.imageState.findIndex(data => data.id === id);
    console.log(index)
    if (!this.state.imageState[index].clicked) {
      // if clicked is false
      console.log("score+1")
      let newState = this.state.imageState;
      newState[index].clicked = true;
      this.setState(newState);
      this.increaseScore();
      this.shuffleImage();
    } else {
      //if clicked is true
      console.log("lose")
      this.endModalHandleShow();
      this.shuffleImage();
    }
  }

  shuffleImage = () => {
    // function that randomize the order of the imageState
    let shuffleState = this.state.imageState;
    shuffleState.sort(() => Math.random() - 0.5);
    console.log(shuffleState);
    this.setState({ imageState: shuffleState });
  }

  render() {
    return (
      <Container>
        <Score
          highScore={this.state.highScore}
          currentScore={this.state.currentScore}
          instructionShow={this.instructionModalHandleShow}
        />

        <div className="row" id="gameWindow">
          {this.state.imageState.map(data => {
            return (
              <Image
                id={data.id}
                key={data.id}
                image={data.image}
                clicked={data.clicked}
                imageClick={this.imageClick}
              />
            )
          })
          }
        </div>

        <EndModal
          show={this.state.endModalShow}
          handleClose={this.endModalHandleClose}
          handleShow={this.endModalHandleShow}
          score={this.state.currentScore}
        />

        <InstructionModal
          show={this.state.instructionModalShow}
          handleClose={this.instructionModalHandleClose}
          handleShow={this.instructionModalHandleShow}
        />

      </Container>
    )
  }


}

export default App;
