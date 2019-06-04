import React from "react";
import "./Score.css"

function Score(props) {
    return (
        <div className="score-container">
            <h4 className="row">
                <span className="title col-sm-7">Clicky Game</span>
                <span className="col-sm-2">
                    <button type="button" className="btn btn-light" id="instruction"
                        onClick={() => {
                            props.instructionShow()
                        }}>
                        Instructions
                    </button>
                </span>

                <span className="scores col-sm-3">
                    <p>Current Score: {props.currentScore}</p>
                    <p>High Score: {props.highScore}</p>
                </span>
            </h4>
            {/* <h4 className="scores">Current Score: {props.currentScore} | High Score: {props.highScore}</h4> */}
        </div>
    )
}

export default Score