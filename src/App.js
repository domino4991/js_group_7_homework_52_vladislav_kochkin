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
            combination: null,
            disabledBtnChange: true
        };
    }

    createDeckInPage = () => {
        this.newCards = new CardDeck();
        let cards = [...this.state.cards];
        cards = this.newCards.getCards(5);
        const combination = new PokerHand(cards).getOutcome();
        document.querySelector('.close-cards').innerHTML = '';
        const disabledBtn = !this.state.disabledBtnChange;
        this.setState({
            cards,
            combination,
            disabledBtnChange: disabledBtn
        });
    }

    selectedCard = i => {
        let cards = [...this.state.cards];
        cards[i].selected = !cards[i].selected;
        this.countChange = cards.filter(item => item.selected === true).length;
        this.setState({
            cards: cards,
        });
    }

    printChangedCard = () => {
        const disabledBtn = !this.state.disabledBtnChange;
        if(this.countChange !== 0) {
            const cards = [...this.state.cards].filter(item => item.selected === false);
            let changedCards  = [...cards, ...this.newCards.getCards(this.countChange)];
            const combination = new PokerHand(changedCards).getOutcome();
            this.setState({
                cards: changedCards,
                combination,
                disabledBtnChange: disabledBtn
            });
        }
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
                        {this.state.cards.map((card, i) => <Card key={card.ranks + card.suit} rank={card.ranks} suit={card.suit} selected={card.selected} selectedCard={() => this.selectedCard(i)} />)}
                    </div>
                    <button onClick={this.createDeckInPage}>deal cards</button>
                    <button onClick={this.printChangedCard} disabled={this.state.disabledBtnChange}>Changed Card</button>
                </div>
            </div>
        );
    }

}

export default App;
