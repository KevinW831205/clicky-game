import React from "react";
import Image from "./components/Image";
import Score from "./components/Score";
import initialGameState from "./initialGameState.json"


class App extends React.Component {

  state = {
    imageState: initialGameState,
    currentScore: 0,
    highScore: 12,
  }

  updateScore = () => {

  }

  updateHighScore = () => {

  }

  resetScore = () => {

  }

  imageClick = id => {
    console.log(this.state.imageState[id - 1].clicked)
    if (!this.state.imageState[id - 1].clicked) {
      console.log("score+1")
      let newState = this.state.imageState;
      newState[id - 1].clicked = true;
      this.setState(newState);

    } else {
      console.log("lose")
    }


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
