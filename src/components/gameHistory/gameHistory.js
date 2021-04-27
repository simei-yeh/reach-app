import React from 'react';
import styles from './gameHistory.module.css'

const GameHistory = ({ past, show, callback }) => {
  return (
    <div className={styles['gameHistory']}>
      <span>Past Guesses</span>
      <div>
        {past.map((round, i) =>
          <div key={i}>
          {round.map((r, i) =>
            <span key={i}>{r}</span>
          )}
          </div>
        )}
      </div>
    </div>
  )
}

export default GameHistory;