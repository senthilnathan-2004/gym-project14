import React, { useState, useEffect } from 'react';
import './Game.css';

const Game = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [targetPos, setTargetPos] = useState({ top: '50%', left: '50%' });
  const [gameOver, setGameOver] = useState(false);

  const startGame = () => {
    setIsPlaying(true);
    setScore(0);
    setTimeLeft(30);
    setGameOver(false);
    moveTarget();
  };

  const moveTarget = () => {
    const top = Math.floor(Math.random() * 80) + 10;
    const left = Math.floor(Math.random() * 80) + 10;
    setTargetPos({ top: `${top}%`, left: `${left}%` });
  };

  const hitTarget = () => {
    if (!isPlaying) return;
    setScore(score + 1);
    moveTarget();
  };

  useEffect(() => {
    if (isPlaying && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (isPlaying && timeLeft === 0) {
      setIsPlaying(false);
      setGameOver(true);
    }
  }, [timeLeft, isPlaying]);

  return (
    <section id="game" className="game-section">
      <div className="container">
        <h2 className="section-title">REACTION <span>TAP</span></h2>
        <p className="game-description">Test your reflexes before you hit the weights! Tap the target as fast as you can in 30 seconds.</p>
        
        <div className="game-board glass-panel">
          {!isPlaying && !gameOver && (
            <div className="game-start-screen">
              <h3>Tap to Lift!</h3>
              <button className="btn-primary" onClick={startGame}>Start Game</button>
            </div>
          )}

          {isPlaying && (
            <>
              <div className="game-hud">
                <div className="hud-item">Time: <span>{timeLeft}s</span></div>
                <div className="hud-item">Score: <span>{score}</span></div>
              </div>
              <div 
                className="game-target" 
                style={{ top: targetPos.top, left: targetPos.left }}
                onClick={hitTarget}
              >
                <div className="target-inner">BL</div>
              </div>
            </>
          )}

          {gameOver && (
            <div className="game-over-screen">
              <h3>Time's Up!</h3>
              <p>Your Score: <span>{score}</span></p>
              <p className="game-message">
                {score > 25 ? "Incredible reaction time! You're ready for the big weights!" : 
                 score > 15 ? "Good job! A little pre-workout and you'll be unstoppable." :
                 "Keep training! Consistency is key."}
              </p>
              <button className="btn-primary" onClick={startGame}>Play Again</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Game;
