import React from 'react';
import { ChessComp } from './components/ChessComp';
import { ChessType } from './types/enums';

export class App extends React.Component {
  render() {
    return (
      <div>
        <ChessComp type={ChessType.red} onClick={() => {
          console.log('red')
        }} />
        <ChessComp type={ChessType.black} />
      </div>
    )
  }
}

export default App;
