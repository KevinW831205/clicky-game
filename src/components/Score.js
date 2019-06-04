import React from "react";
import "./Score.css"

function Score(props) {
    return (
        <div className="score-container">
            <h4 className="row">
                <span className="title col s3">Clicky Game</span>
                <span className="col s5"></span>
                <span className="scores col s4">Current Score: {props.currentScore} | High Score: {props.highScore}</span>
            </h4>
            {/* <h4 className="scores">Current Score: {props.currentScore} | High Score: {props.highScore}</h4> */}
        </div>
    )
}

export default Score