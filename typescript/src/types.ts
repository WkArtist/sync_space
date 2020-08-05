import { Color, Mark } from "./enum"

export type Deck = NormalCard[]
// type Color = "♥" | "♠" | "♣" | "♦";

export type NormalCard = {
    color: Color
    mark: Mark
}