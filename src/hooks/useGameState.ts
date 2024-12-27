import { useState, useCallback } from 'react';
import { Row } from '../types/game';
import { createInitialRows, checkWinningCondition } from '../utils/gameUtils';
import { triggerWinningConfetti } from '../utils/confettiEffects';

export const useGameState = () => {
  const [rows, setRows] = useState<Row[]>(createInitialRows());
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [hasWon, setHasWon] = useState(false);
  const [lives, setLives] = useState(3);
  const [showFailure, setShowFailure] = useState(false);

  const handleWin = useCallback(() => {
    setHasWon(true);
    setGameOver(true);
    triggerWinningConfetti();
  }, []);

  const handleBoxClick = useCallback((rowIndex: number, boxIndex: number) => {
    if (hasWon || gameOver) return;

    setRows(prevRows => {
      const newRows = [...prevRows];
      const currentRow = newRows[rowIndex];
      
      if (currentRow.isLocked || currentRow.boxes[boxIndex].isRevealed) {
        return prevRows;
      }
      
      // Reveal the clicked box
      currentRow.boxes[boxIndex].isRevealed = true;
      currentRow.isLocked = true;

      if (currentRow.boxes[boxIndex].color === 'red') {
        const newLives = lives - 1;
        setLives(newLives);
        setShowFailure(true);
        if (newLives === 0) {
          setGameOver(true);
        }
        return newRows;
      }

      // Update score and activate next row
      setScore(prev => prev + 1);
      
      if (rowIndex < newRows.length - 1) {
        newRows[rowIndex + 1].isActive = true;
      }

      // Check for win condition
      if (checkWinningCondition(newRows)) {
        handleWin();
      }

      return newRows;
    });
  }, [score, hasWon, handleWin, lives, gameOver]);

  const resetGame = useCallback(() => {
    setRows(createInitialRows());
    setScore(0);
    setGameOver(false);
    setHasWon(false);
    setLives(3);
    setShowFailure(false);
  }, []);

  const retryGame = useCallback(() => {
    if (lives === 0) return;
    
    setRows(prevRows => 
      prevRows.map(row => ({
        ...row,
        boxes: row.boxes.map(box => ({ ...box, isRevealed: false })),
        isActive: row.id === 0,
        isLocked: false,
      }))
    );
    setScore(0);
    setGameOver(false);
    setHasWon(false);
    setShowFailure(false);
  }, [lives]);

  return {
    rows,
    score,
    gameOver,
    hasWon,
    lives,
    showFailure,
    handleBoxClick,
    resetGame,
    retryGame
  };
};