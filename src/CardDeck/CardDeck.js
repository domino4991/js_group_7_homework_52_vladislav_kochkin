class CardDeck {
    constructor() {
        this.cards = [];
        this.suits = ['hearts', 'spades', 'diams', 'clubs'];
        this.ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a'];
        this.cardSeniority = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        for (let i = 0; i < this.suits.length; i++) {
            for(let j = 0; j < this.ranks.length; j++) {
                let card = {suit: this.suits[i], ranks: this.ranks[j], seniority: this.cardSeniority[j], selected: false};
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