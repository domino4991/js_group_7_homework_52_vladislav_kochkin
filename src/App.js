import React, {Component} from 'react';
import './App.css';
import './cards.css';
import Card from "./Card/Card";
import CardDeck from "./CardDeck/CardDeck";
import PokerHand from "./PokerHand/PokerHand";
import ResultCombo from "./ResultCombo/ResultCombo";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            combination: null
        };
    }

    createDeckInPage = () => {
        const newCards = new CardDeck();
        let cards = [...this.state.cards];
        cards = newCards.getCards(5);
        const combination = new PokerHand(cards).getOutcome();
        document.querySelector('.close-cards').innerHTML = '';
        this.setState({
            cards,
            combination
        });
    }

    render() {
        return (
            <div className="App">
                <div className="playingCards faceImages">
                    <ResultCombo result={this.state.combination} />
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
