import React from 'react';
import { Button } from './Button';
import { Trophy, RefreshCw } from 'lucide-react';

interface GameOverlayProps {
  isVisible: boolean;
  hasWon: boolean;
  score: number;
  onReset: () => void;
  onRetry: () => void;
}

export const GameOverlay: React.FC<GameOverlayProps> = ({
  isVisible,
  hasWon,
  score,
  onReset,
  onRetry,
}) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center transition-all duration-500">
      <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-md w-full mx-4 transform transition-all duration-500 scale-100">
        {hasWon ? (
          <div className="text-center">
            <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Congratulations!
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              You've mastered the challenge!
            </p>
          </div>
        ) : (
          <div className="text-center">
            <RefreshCw className="w-16 h-16 text-indigo-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Game Over
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Final Score: <span className="font-semibold text-indigo-600">{score}</span>
            </p>
          </div>
        )}
        <div className="space-x-4">
          {!hasWon && (
            <Button onClick={onRetry} variant="secondary">
              Try Again
            </Button>
          )}
          <Button onClick={onReset}>
            New Game
          </Button>
        </div>
      </div>
    </div>
  );
};