import React, { useState, useEffect } from 'react';
import styles from './gameContainer.module.css';
import GameHistory from '../gameHistory/gameHistory';
import CurrentGuess from '../currentGuess/currentGuess';
import randomNumberAPI from '../randomNumberGeneratorAPI'

const GameContainer = ({ }) => {
  const [startGame, setStartGame] = useState(true);
  const [pattern, setPattern] = useState(new Array(4).fill(''));
  const [guess, setGuess] = useState([]);
  const [round, setRound] = useState(null);

  useEffect(() => {
    var answers;
    if (startGame) {
      (async function () {
        answers = await randomNumberAPI.findNewNumbers();
        setPattern(answers);
      })();
      setRound(10);
    }
  }, [startGame])

  useEffect(() => {
    if (round === 0) {
      setStartGame(false);
      setRound(null);
      alert('Game over! Restart Game');
    }
  }, [round])

  return (
    <div className={styles['gameContainer']}>
      <GameHistory />
      <CurrentGuess
        newGame={startGame}
        round={round}
        pattern={pattern}
        start={() => { setStartGame(true) }}
        nextRound={() => { setRound(round - 1) }}
        submitGuess={(e) => {setGuess(e)}}
        endGame={() => { setRound(0) }}
      />
    </div>
  )
}

export default GameContainer;