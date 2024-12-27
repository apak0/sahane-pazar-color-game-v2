import React from 'react';
import { Box } from './Box';
import { Row } from '../types/game';

interface GameGridProps {
  rows: Row[];
  gameOver: boolean;
  onBoxClick: (rowIndex: number, boxIndex: number) => void;
}

export const GameGrid: React.FC<GameGridProps> = ({ rows, gameOver, onBoxClick }) => (
  <div className="space-y-4">
    {rows.map((row, rowIndex) => (
      <div key={row.id} className="flex gap-4 justify-center">
        {row.boxes.map((box, boxIndex) => (
          <Box
            key={box.id}
            box={box}
            isActive={row.isActive && !gameOver}
            isRowLocked={row.isLocked}
            onClick={() => onBoxClick(rowIndex, boxIndex)}
          />
        ))}
      </div>
    ))}
  </div>
);