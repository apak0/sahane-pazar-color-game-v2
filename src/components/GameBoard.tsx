import React from "react";
import { GameScore } from "./GameScore";
import { GameGrid } from "./GameGrid";
import { GameOverlay } from "./GameOverlay";
import { FailureModal } from "./FailureModal";
import { WinModal } from "./WinModal";
import { Lives } from "./Lives";
import { useGameState } from "../hooks/useGameState";

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
    retryGame,
  } = useGameState();

  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="title flex items-center justify-center">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 pb-4">
          Sahane Pazar Box Game
        </h1>
      </div>
      <div className="flex  justify-center items-center ">
        <GameScore score={score} />

        <Lives lives={lives} />
      </div>
      <div className="relative px-4">
        <GameGrid rows={rows} gameOver={gameOver} onBoxClick={handleBoxClick} />

        <WinModal isVisible={hasWon} score={score} onNewGame={resetGame} />
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
