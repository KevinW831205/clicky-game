import React from "react";
import "./Image.css"

function Image(props) {
    return (
        <div className="col-sm-3">
            {/* <h6>{props.id}</h6> */}
            <img className ="shadow imageStyle z-depth-3" alt="images" src={props.image} onClick={() => props.imageClick(props.id)} />
        </div >
    )
}

export default Image