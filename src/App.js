import logo from './logo.svg';
import './App.css';
import Solution from './components/Solution';
import Score from './components/Score';
import Letters from './components/Letters';
import EndGame from './components/EndGame';
import { useState } from 'react';

function App() {

  function generateLetterStatuses() {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }

  const [letterStatus, setLetterStatus] = useState(generateLetterStatuses())
  const [solution, setSolution] = useState({word: 'CALM', hint: 'Your ideal mood when coding.'})
  let [score, setScore] = useState(100)
  let [result, setResult] = useState({gameOver: false, win: false})

  const changeStatus = (letter) => {
    const newLetterStatus = {...letterStatus,[letter]: true}
    setLetterStatus(newLetterStatus)
    if (solution.word.includes(letter)) {
      score += 5  
    } else {
      score -= 20
    }
    setScore(score)
    
    const wordGuessed = solution.word == solution.word.split('').map(letter => (letter=newLetterStatus[letter] ? letter : '_')).join('')
    if (wordGuessed) {
      setResult({...result, gameOver: true, win: true})  
    } else if (score <= 0) {
      setResult({...result, gameOver: true, win: false}) 
    }

  }

  return (
    <div id='root'>
      {result.gameOver ? (
        <EndGame win={result.win} secretWord={solution.word} />
      ) : (
        <div>
          <Score score={score} />
          <Solution solution={solution} letterStatus={letterStatus} />
          <Letters letterStatus={letterStatus} changeStatus={changeStatus} />
        </div>
      )}
    </div>
  );
}

export default App;
