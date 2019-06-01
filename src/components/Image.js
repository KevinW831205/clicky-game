import React from "react";
import "./Image.css"

function Image(props) {
    return (
        <div className="col s3">
            <h6>{props.id}</h6>
            <img className ="imageStyle z-depth-5" alt="images" src={props.image} onClick={() => props.imageClick(props.id)} />
        </div >
    )
}

export default Image