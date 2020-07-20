import React from "react";

const Card = (props) => {
    let cardClassName = props.selected ? `card rank-${props.rank} ${props.suit} selected` : `card rank-${props.rank} ${props.suit}`;
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
        <div className={cardClassName} onClick={props.selectedCard}>
            <span className="rank">{props.rank.toUpperCase()}</span>
            <span className="suit">{suit}</span>
        </div>
    );
};

export default Card;