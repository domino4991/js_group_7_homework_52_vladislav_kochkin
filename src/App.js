import React, {Component} from 'react';
import './App.css';
import './cards.css';
import Card from "./Card/Card";
import CardDeck from "./CardDeck/CardDeck";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        };
    }

    createDeckInPage = () => {
        this.cardDeck = new CardDeck();
        let cards = [...this.state.cards];
        cards = this.cardDeck.getCards(5);
        document.querySelector('.close-cards').remove();
        this.setState({cards});
    }

    render() {
        return (
            <div className="App">
                <div className="playingCards faceImages">
                    <div className="close-cards">
                        <div className="card back">*</div>
                        <div className="card back">*</div>
                        <div className="card back">*</div>
                        <div className="card back">*</div>
                        <div className="card back">*</div>
                    </div>
                    <div className="table-card">
                        {this.state.cards.map(card => <Card key={card.ranks + card.suit} rank={card.ranks} suit={card.suit} />)}
                    </div>
                    <button onClick={this.createDeckInPage}>Go</button>
                </div>
            </div>
        );
    }

}

export default App;
