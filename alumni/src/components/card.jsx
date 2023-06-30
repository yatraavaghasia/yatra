import React from "react";
function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <img src={props.img} alt="profilepicture" className="card-img"></img>
      </div>
      <div className="bottom">
        <h2>{props.name}</h2>
        <h3>{props.position}</h3>
        <a href={props.url} target="_blank" rel="noreferrer">
          <i className="fa fa-linkedin-square"></i>
        </a>
      </div>
    </div>
  );
}
export default Card;
