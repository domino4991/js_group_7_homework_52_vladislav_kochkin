import React from "react";

const Card = (props) => {
    let suit;
    switch(props.suit) {
        case "hearts":
            suit = "♥"
            break;
        case 'diams':
            suit = "♦";
            break;
        case 'clubs':
            suit = "♣";
            break;
        case 'spades':
            suit = "♠";
            break;
        default:
            suit = "♠";
            break;
    }
    return (
        <div className={"card rank-" + props.rank + " " + props.suit}>
            <span className="rank">{props.rank.toUpperCase()}</span>
            <span className="suit">{suit}</span>
        </div>
    );
};

export default Card;