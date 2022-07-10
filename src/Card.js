import React from "react";
import "./Card.css";
import map from "./images/Fill 219.png";

export default function Card(props) {
  return (
    <div className="card">
      <div className="upper--card">
        <img className="place--img" src={props.imageUrl} />
        <div className="part2">
          <div className="card--loc">
            <img src={map} />
            <h4>{props.location.toUpperCase()}</h4>
            <a href={props.googleMapsUrl} target="_blank">
              View on Google Maps
            </a>
          </div>
          <h2 className="place--title">{props.title}</h2>
          <p className="date">
            {props.startDate} - {props.endDate}
          </p>
          <p>{props.description}</p>
        </div>
      </div>
      <div className="hr"></div>
    </div>
  );
}
