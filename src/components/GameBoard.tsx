import React from 'react';
import { GameScore } from './GameScore';
import { GameGrid } from './GameGrid';
import { GameOverlay } from './GameOverlay';
import { FailureModal } from './FailureModal';
import { WinModal } from './WinModal';
import { Lives } from './Lives';
import { useGameState } from '../hooks/useGameState';

export const GameBoard: React.FC = () => {
  const {
    rows,
    score,
    gameOver,
    hasWon,
    lives,
    showFailure,
    handleBoxClick,
    resetGame,
    retryGame
  } = useGameState();

  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="relative px-4">
        <Lives lives={lives} />
        <GameScore score={score} />
        <GameGrid
          rows={rows}
          gameOver={gameOver}
          onBoxClick={handleBoxClick}
        />
        <WinModal
          isVisible={hasWon}
          score={score}
          onNewGame={resetGame}
        />
        <FailureModal
          isVisible={showFailure}
          score={score}
          onRetry={retryGame}
          onReset={resetGame}
          showRetry={lives > 0}
        />
      </div>
    </div>
  );
};