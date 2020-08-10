import { Card, NormalCard, Joker } from "./types";
import { Mark, Color } from "./enum";

export class Deck {
    private cards: Card[] = [];

    constructor(cards?: Card[]) {
        if (cards) {
            this.cards = cards;
        } else {
            this.init()
        }
    }

    private init() {
        const mark = Object.values(Mark)
        const color = Object.values(Color)
        for (const m of mark) {
            for (const c of color) {
                const card: NormalCard = {
                    color: c,
                    mark: m,
                    getString() {
                        return this.color + this.mark;
                    }
                }
                this.cards.push(card)
            }
        }
        let joker: Joker = {
            type: "small",
            getString() {
                return "jo";
            }
        }
        this.cards.push(joker)
        let Joker: Joker = {
            type: "big",
            getString() {
                return "Jo";
            }
        }
        this.cards.push(Joker)
    }

    print() {
        let result = '\n';
        this.cards.forEach((ele, index) => {
            let str = ele.getString();
            result += str + "\t";
            if ((index + 1) % 6 === 0) {
                result += '\n';
            }
        });
        console.log(result);
    }

    /**
     * 洗牌
     */
    shuffle() {
        for (let i = 0; i < this.cards.length; i++) {
            const targetIndex = this.getRandom(0, this.cards.length)
            const temp = this.cards[i]
            this.cards[i] = this.cards[targetIndex];
            this.cards[targetIndex] = temp;
        }
    }

    /**
     * 发牌
     */
    publish(): [Deck, Deck, Deck, Deck] {
        let player1: Deck, player2: Deck, player3: Deck, left: Deck
        player1 = this.takeCards(17);
        player2 = this.takeCards(17);
        player3 = this.takeCards(17);
        left = new Deck(this.cards);

        return [player1, player2, player3, left]
    }

    private takeCards(n: number): Deck {
        const cards: Card[] = [];
        for (let i = 0; i < n; i++) {
            cards.push(this.cards.shift() as Card)
        }
        return new Deck(cards);
    }

    private getRandom(min: number, max: number) {
        const dec = max - min;
        return Math.floor(Math.random() * dec + min)
    }
}
