
type Deck = NormalCard[]
type Color = "♥" | "♠" | "♣" | "♦";
type NormalCard = {
    color: Color
    mark: number
}

function createDeck(): Deck {
    let result: Deck = [];
    for (let i = 0; i < 13; i++) {
        result.push({
            color: '♠',
            mark: i + 1
        })
        result.push({
            color: "♣",
            mark: i + 1
        })
        result.push({
            color: "♥",
            mark: i + 1
        })
        result.push({
            color: "♦",
            mark: i + 1
        })
    }
    return result;
}

function printDeck(deck: Deck): string {
    let result: string = '\n'
    deck.forEach((ele, index) => {
        if (ele.mark < 11) {
            let str: string = ele.color + ele.mark + '\t'
            result += str
        }
        if (ele.mark === 11) {
            let str: string = ele.color + "J" + '\t'
            result += str
        }
        if (ele.mark === 12) {
            let str: string = ele.color + "Q" + '\t'
            result += str
        }
        if (ele.mark === 13) {
            let str: string = ele.color + "K" + '\t'
            result += str
        }
        if ((index + 1) % 6 === 0) {
            result += '\n'
        }
    })
    return result;
}

const deck = createDeck()
console.log(printDeck(deck))