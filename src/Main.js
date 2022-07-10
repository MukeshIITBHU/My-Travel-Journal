import React from "react";
import "./Main.css"
import data from "./data"
import Card from "./Card";

export default function Main(){
    const cards = data.map(item => {
        return (
            <Card 
                key={item.id}
                {...item}
            />
        )
    })
    return(
        <div className="main">
            {cards}
        </div>
    )
}