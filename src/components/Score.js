import React from "react";

function Score(props) {
    return (
        <div>
            <pre>Current Score: {props.currentScore}     High Score: {props.highScore}</pre>
        </div>
    )
}

export default Score