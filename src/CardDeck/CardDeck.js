class CardDeck {
    cards = [];
    suits = ['hearts', 'spades', 'diams', 'clubs'];
    ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a'];
    constructor() {
        for (let i = 0; i < this.suits.length; i++) {
            for(let j = 0; j < this.ranks.length; j++) {
                let card = {suit: this.suits[i], ranks: this.ranks[j]};
                this.cards.push(card);
            }
        }
    }
    getCard() {
        let randomNum = Math.floor(Math.random() * (this.cards.length - 1));
        return this.cards.splice(randomNum, 1);
    }

    getCards(howMany) {
        let cards = [];
        for(let i = 0; i < howMany; i++) {
            cards.push(this.getCard()[0]);
        }
        return cards;
    }
}

export default CardDeck;