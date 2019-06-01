import React from "react";

function Score(props) {
    return (
        <div>
            <h4>Current Score: {props.currentScore}</h4>
            <h4>High Score: {props.highScore}</h4>
        </div>
    )
}

export default Score