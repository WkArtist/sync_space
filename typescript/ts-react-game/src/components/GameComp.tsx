import React, { Component } from 'react'
import { GameStatus, ChessType } from '../types/enums'
import { BoardComp } from './BoardComp'

interface IState {
    cheeses: ChessType[]
    gameStatus: GameStatus
}

export class GameComp extends Component<{}, IState> {

    state: IState = {
        cheeses: [],
        gameStatus: GameStatus.gaming
    }

    render() {
        return (
            <div className="game">
                <BoardComp
                    chesses={this.state.cheeses}
                    isGameOver={this.state.gameStatus !== GameStatus.gaming}
                />
            </div>
        )
    }
}
