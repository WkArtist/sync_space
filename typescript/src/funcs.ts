import { Deck } from "./types";
import { Mark, Color } from "./enum";

export function createDeck(): Deck {
    let result: Deck = [];
    const mark = Object.values(Mark)
    const color = Object.values(Color)
    for (const m of mark) {
        for (const c of color) {
            result.push({
                color: c,
                mark: m
            })
        }
    }
    return result;
}

export function printDeck(deck: Deck): string {
    let result: string = '\n'
    deck.forEach((ele, index) => {
        let str: string = ele.color + ele.mark + '\t'
        result += str
        if ((index + 1) % 6 === 0) {
            result += '\n'
        }
    })
    return result;
}