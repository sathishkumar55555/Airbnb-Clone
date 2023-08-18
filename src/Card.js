import React from "react";
import person from "./person.png"
import star from "./star.png";
function Card(props){
    return(
       <div className="card">
        <img className="card--image"
        src={props.img} alt="person"/>
        <div className="card--status">
        <img src={star} className="card--star" alt="star"></img>
        <span>{props.rating}</span>
        <span className="grey">({props.reviewCount})*</span>
        <span className="grey">{props.place}</span>

        </div>
        <p>
         {props.title}
        </p>
        <p>
            <span className="bold">
                From ${props.price}</span> / person
        </p>

       </div>
    )
}

export default Card;