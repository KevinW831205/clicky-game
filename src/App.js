import React from "react";
import Image from "./components/Image";
import Score from "./components/Score";
import initialGameState from "./initialGameState.json"


// Officehours initialGameState json is being changed.

class App extends React.Component {

  state = {
    imageState: initialGameState,
    currentScore: 0,
    highScore: 0,
  }

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

    const index = this.state.imageState.findIndex(data => data.id === id);

    console.log(index)
    if (!this.state.imageState[index].clicked) {
      console.log("score+1")
      let newState = this.state.imageState;
      newState[index].clicked = true;
      this.setState(newState);
      this.increaseScore();
      this.shuffleImage();
    } else {
      console.log("lose")
      this.resetGame();
      this.shuffleImage();
    }
  }

  shuffleImage = () => {
    let shuffleState = this.state.imageState;
    shuffleState.sort(() => Math.random() - 0.5);
    console.log(shuffleState);
    this.setState({ imageState: shuffleState });
  }

  render() {
    return (
      <div>
        <Score
          highScore={this.state.highScore}
          currentScore={this.state.currentScore}
        ></Score>
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
    )
  }


}

export default App;
