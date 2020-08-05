Object.defineProperty(exports, "__esModule", { value: true });
exports.printDeck = exports.createDeck = void 0;
const enum_1 = require("./enum");
function createDeck() {
    let result = [];
    const mark = Object.values(enum_1.Mark);
    const color = Object.values(enum_1.Color);
    for (const m of mark) {
        for (const c of color) {
            result.push({
                color: c,
                mark: m
            });
        }
    }
    return result;
}
exports.createDeck = createDeck;
function printDeck(deck) {
    let result = '\n';
    deck.forEach((ele, index) => {
        let str = ele.color + ele.mark + '\t';
        result += str;
        if ((index + 1) % 6 === 0) {
            result += '\n';
        }
    });
    return result;
}
exports.printDeck = printDeck;
