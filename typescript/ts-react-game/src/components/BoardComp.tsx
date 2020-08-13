import React from 'react'
import { ChessType } from "../types/enums";
import { ChessComp } from "./ChessComp";
import './BoradComp.css'

interface IProps {
    chesses: ChessType[]
    isGameOver: boolean
    onClick?: (index: number) => void
}

export function BoardComp(props: IProps) {
    const list = props.chesses.map((type, i) => {
        return (
            <ChessComp key={i} type={type} onClick={() => {
                if (props.onClick && !props.isGameOver) {
                    props.onClick(i)
                }
            }} />
        )
    })
    return (
        <div className="board">
            {list}
        </div>
    )
}