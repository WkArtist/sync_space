import { Deck } from "./deck";

const deck = new Deck()
deck.shuffle()
deck.print()
const res = deck.publish()
res[3].print()