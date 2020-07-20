class PokerHand {
    constructor(cards) {
        this.cards = cards;
    }

    getOutcome() {
        if(this.fullHouse() === 6) {
            return 'Full house';
        } else if (this.straight() === 10) {
            return 'Royal Flush';
        } else if (this.flush() === 5 && this.straight()) {
            return 'straight flush';
        } else if (this.care()) {
            return 'Care';
        } else if (this.pair() === 1) {
            return 'pair';
        } else if (this.twoPair() === 2) {
            return 'two pair';
        } else if (this.triplet() === 3) {
            return 'triplet';
        } else if(this.flush() === 5) {
            return 'flush';
        } else if (this.straight()) {
          return 'straight';
        } else {
            return 'No combo';
        }
    }

    pair = () => {
        let pairCounter = {};
        [...this.cards].forEach(elem => pairCounter[`${elem.ranks}`] = ~~pairCounter[`${elem.ranks}`] + 1);
        let combo = Object.keys(pairCounter).filter(elem => pairCounter[elem] === 2);
        if(combo.length === 1) {
            return 1;
        }
    }

    twoPair = () => {
        let pairCounter = {};
        [...this.cards].forEach(elem => pairCounter[`${elem.ranks}`] = ~~pairCounter[`${elem.ranks}`] + 1);
        let combo = Object.keys(pairCounter).filter(elem => pairCounter[elem] > 1);
        if(combo.length === 2) {
            return 2;
        }
    }

    triplet = () => {
        let pairCounter = {};
        [...this.cards].forEach(elem => pairCounter[`${elem.ranks}`] = ~~pairCounter[`${elem.ranks}`] + 1);
        let combo = Object.keys(pairCounter).filter(elem => pairCounter[elem] > 2);
        if(combo.length === 1) {
            return 3;
        }
    }

    straight = () => {
        let combo = false;
        let trueCount = 0;
        const cards = [...this.cards]
            .sort((a, b) => a.seniority - b.seniority)
            .map((item, i, arr) => {
                if((item.seniority - arr[i].seniority) === -1 || (arr[3].seniority === 4 && arr[4].seniority === 13)) {
                    combo = true;
                } else {
                    arr.forEach((elem, j) => {
                        if((item.seniority - elem.seniority) === -1 || (i === 0 && j === 0)) {
                            trueCount++;
                        }
                    });
                }
                return item;
            });
        if((cards[0].seniority === 9 && cards[4].seniority === 13) && this.flush()) {
            return 10;
        } else {
            if(trueCount === 5) {
                combo = true;
            }
        }
        return combo;
    }

    flush = () => {
        const cards = [...this.cards].filter((item, i, arr) => arr[0].suit === item.suit);
        if(cards.length === 5) {
            return 5;
        }
    }

    fullHouse = () => {
        const cards = [...this.cards].filter((item, index, arr) => 1 < arr.filter(elem => elem.ranks === item.ranks).length);
        if(cards.length === 5) {
            return 6;
        }
    }

    care = () => {
        let combo = [...this.cards]
            .sort((a, b) => a.seniority - b.seniority)
            .filter((item, i, arr) => 1 < arr.filter(elem => elem.ranks === item.ranks).length);
        if(combo.length === 4) {
            return combo.every((item, i, arr) => item.ranks === arr[0].ranks);
        } else {
            combo = false;
        }
        return combo;
    }
}

export default PokerHand;