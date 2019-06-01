import React from "react";


function Image(props) {
    return (
        <div onClick={() => props.imageClick(props.id)}>
            <h2>{props.id}</h2>
        </div >
    )
}

export default Image