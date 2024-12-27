import React from 'react';
import { HelpCircle } from 'lucide-react';
import { Box as BoxType } from '../types/game';

interface BoxProps {
  box: BoxType;
  onClick: () => void;
  isActive: boolean;
  isRowLocked: boolean;
}

export const Box: React.FC<BoxProps> = ({ box, onClick, isActive, isRowLocked }) => {
  const baseClasses = "w-20 h-20 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 transform hover:scale-105 shadow-lg";
  
  const getBoxClasses = () => {
    if (!box.isRevealed) {
      return `${baseClasses} ${
        isActive && !isRowLocked
          ? 'bg-gradient-to-br from-indigo-100 to-white hover:from-indigo-200 hover:to-indigo-50 border-2 border-indigo-200' 
          : 'bg-gradient-to-br from-gray-300 to-gray-200 cursor-not-allowed opacity-60'
      }`;
    }
    return `${baseClasses} ${
      box.color === 'blue' 
        ? 'bg-gradient-to-br from-blue-500 to-blue-600 animate-reveal' 
        : 'bg-gradient-to-br from-red-500 to-red-600 animate-shake'
    }`;
  };

  return (
    <div 
      className={getBoxClasses()}
      onClick={() => isActive && !isRowLocked && !box.isRevealed && onClick()}
    >
      {!box.isRevealed && (
        <HelpCircle className={`w-7 h-7 ${isActive && !isRowLocked ? 'text-indigo-500' : 'text-gray-500'}`} />
      )}
    </div>
  );
};