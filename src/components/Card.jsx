import React from "react";

const Card = (props) => {
    return (
        <div className ="Card">
            <img className={props.imageName} src={props.imageLink}/>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <a href={props.mapLink} target="_blank">
                <button className="button">View Location</button>
            </a>
        </div>
    )
}

export default Card;