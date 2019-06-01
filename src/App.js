import React from "react";
import Container from "./components/Container"
import Image from "./components/Image";
import Score from "./components/Score";
import initialGameState from "./initialGameState.json";

// Materialize things 
// import Button from "./components/Button";
// import Modal from "./components/Modal";
// import M from "materialize-css";


//Bootstrap things
import EndModal from "./components/EndModal";

class App extends React.Component {

  // clone 
  state = {
    imageState: initialGameState,
    currentScore: 0,
    highScore: 0,
    modalShow: false
  }

  //Modal functions
  handleClose = () => {
    this.setState({ modalShow: false });
  }

  handleShow = () => {
    this.setState({ modalShow: true });
  }

  //Game functions
  increaseScore = () => {
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
      this.handleShow();
      this.resetGame();
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
        ></Score>
        <div className="row">
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
          show={this.state.modalShow}
          handleClose={this.handleClose}
          handleShow={this.handleShow}
        />

        {/* modal test button */}
        {/* <button onClick={this.handleShow}>openmodal</button> */}

        {/* <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
        */}

        {/* <Button></Button>
        <Modal></Modal> */}

      </Container>
    )
  }


}

export default App;
