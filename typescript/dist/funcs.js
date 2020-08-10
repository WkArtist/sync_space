Object.defineProperty(exports, "__esModule", { value: true });
exports.printDeck = exports.createDeck = void 0;
const enum_1 = require("./enum");
function createDeck() {
    let result = [];
    const mark = Object.values(enum_1.Mark);
    const color = Object.values(enum_1.Color);
    for (const m of mark) {
        for (const c of color) {
            const card = {
                color: c,
                mark: m,
                getString() {
                    return this.color + this.mark;
                }
            };
            result.push(card);
        }
    }
    let joker = {
        type: "small",
        getString() {
            return "jo";
        }
    };
    result.push(joker);
    let Joker = {
        type: "big",
        getString() {
            return "Jo";
        }
    };
    result.push(Joker);
    return result;
}
exports.createDeck = createDeck;
function printDeck(deck) {
    let result = '\n';
    deck.forEach((ele, index) => {
        let str = ele.getString();
        result += str + "\t";
        if ((index + 1) % 6 === 0) {
            result += '\n';
        }
    });
    return result;
}
exports.printDeck = printDeck;
