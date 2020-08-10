import { Color, Mark } from "./enum"

export type Deck = Card[]

export interface Card {
    getString(): string
}

export interface NormalCard extends Card {
    color: Color
    mark: Mark
}

export interface Joker extends Card {
    type: "big" | "small"
}